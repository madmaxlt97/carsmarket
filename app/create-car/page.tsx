"use client";
import CarForm from "@/components/CarForm";
import { createCar } from "./actions";

export default function createCarPage() {
  return (
    <div className="min-h-full p-8 flex justify-center items-start">
      <CarForm action={createCar} submitButtonText="Add Car" />
    </div>
  );
}
