"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

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

      userId: session.user.id,
    },
  });
  redirect(`/cars/${newCar.id}`);
}
