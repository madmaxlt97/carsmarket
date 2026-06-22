import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import CarCard from "@/components/CarCard";

export default async function UserPage() {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/");
  }
  const userId = session.user.id;
  const userCars = await prisma.car.findMany({
    where: {
      userId: session?.user?.id,
    },
  });
  const userCarsCounter = userCars.length;
  return (
    <div>
      <h1>Hello, {session.user.name}</h1>

      {userCars.length === 0 ? (
        <div className="text-gray-500 italic p-4 border border-dashed rounded-xl text-center">
          No cars posted yet!
        </div>
      ) : (
        <>
          <div>
            <span>Your cars</span>
            <span className="bg-slate-100 px-2 py-0.5 rounded-full text-sm text-slate-600">
              ({userCarsCounter})
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-2 w-full max-w-[2000px]">
            {userCars.map((car) => (
              <CarCard
                key={car.id}
                car={{
                  ...car,
                  image: car.imageUrl,
                }}
                isEditable={true}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
