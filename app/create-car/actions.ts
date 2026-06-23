"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { error } from "console";

export async function createCar(prevState: any, formData: FormData) {
  const session = await auth();

  const brand = formData.get("brand") as string;
  const model = formData.get("model") as string;
  const year = parseInt(formData.get("year") as string);
  const mileage = parseInt(formData.get("mileage") as string);
  const price = parseInt(formData.get("price") as string);
  const shape = formData.get("shape") as string;
  const displacement = parseInt(formData.get("displacement") as string);
  const power = parseInt(formData.get("power") as string);
  const fuelType = formData.get("fuelType") as string;
  const description = formData.get("description") as string;
  const gearbox = formData.get("gearbox") as string;
  const driveType = formData.get("driveType") as string;
  const doorNumber = formData.get("doorNumber") as string;
  const color = formData.get("color") as string;
  const phone = formData.get("phone") as string;

  if (!session?.user?.id) {
    return {
      error: "You must be logged in to post cars",
      fields: {
        brand,
        model,
        year,
        mileage,
        price,
        shape,
        displacement,
        power,
        fuelType,
        description,
        gearbox,
        driveType,
        doorNumber,
        color,
        phone,
      },
    };
  }

  const newCar = await prisma.car.create({
    data: {
      brand,
      model,
      shape,
      year,
      mileage,
      displacement,
      power,
      fuelType,
      price,
      imageUrl: "",
      description,
      gearbox,
      driveType,
      doorNumber,
      color,
      phone,

      userId: session.user.id,
    },
  });
  redirect(`/cars/${newCar.id}`);
}

export async function deleteCar(carId: string) {
  const session = await auth();
  if (!session || !session.user?.id) {
    redirect("/");
  }
  const carToDelete = await prisma.car.deleteMany({
    where: {
      id: carId,
      userId: session.user.id,
    },
  });
  revalidatePath("/user-dashboard");
}

export async function updateCar(prevState: any, formData: FormData) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return { error: "You must be logged in" };
  }
  const carId = formData.get("carId") as string;
  if (!carId) {
    console.log("Car with this ID not found");
  }
  try {
    const brand = formData.get("brand") as string;
    const model = formData.get("model") as string;
    const shape = (formData.get("shape") as string) || "Other";
    const fuelType = (formData.get("fuelType") as string) || "Other";
    const year = parseInt(formData.get("year") as string);
    const price = parseInt(formData.get("price") as string);
    const mileage = formData.get("mileage")
      ? parseInt(formData.get("mileage") as string)
      : null;
    const displacement = formData.get("displacement")
      ? parseFloat(formData.get("displacement") as string)
      : null;
    const power = formData.get("power")
      ? parseInt(formData.get("power") as string)
      : null;
    const gearbox = formData.get("gearbox") as string;
    const driveType = formData.get("driveType") as string;
    const color = formData.get("color") as string;
    const doorNumber = formData.get("doorNumber") as string;
    const phone = (formData.get("phone") as string) || "No phone";
    const description = formData.get("description") as string;

    if (!brand || !model || !year || !price) {
      return {
        error: "Please enter needed values!",
        fields: { brand, model, year, price },
      };
    }

    const result = await prisma.car.updateMany({
      where: {
        id: carId,
        userId: session.user.id,
      },
      data: {
        brand,
        model,
        shape,
        fuelType,
        year,
        price,
        mileage,
        displacement,
        power,
        gearbox,
        driveType,
        color,
        doorNumber,
        phone,
        description,
      },
    });
    if (result.count === 0) {
      return { error: "You don't have rights to update car" };
    }
  } catch (error) {
    console.error("Update car error:", error);
    return { error: "Something went wrong while saving changes" };
  }

  revalidatePath("/user-dashboard");
  redirect("/user-dashboard");
}
