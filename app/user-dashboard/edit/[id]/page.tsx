import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import CarForm from "@/components/CarForm";
import { updateCar } from "@/app/create-car/actions";

interface carPageProps {
  params: Promise<{ id: string }>;
}
export default async function UpdateCar({ params }: carPageProps) {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/");
  }
  const userId = session.user.id;
  const { id } = await params;
  const userCar = await prisma.car.findUnique({
    where: {
      id: id,
    },
  });

  if (!userCar || userCar?.userId !== session.user.id) {
    redirect("/user-dashboard");
  }

  return (
    <div>
      <h1>
        Edit {userCar.brand} {userCar.model}
      </h1>
      <CarForm
        action={updateCar}
        initialData={userCar}
        submitButtonText="Save Changes"
      />
    </div>
  );
}
