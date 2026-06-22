"use client";

import { deleteCar } from "@/app/create-car/actions";
import { Trash2 } from "lucide-react";

interface DeleteButtonProps {
  carId: string;
}

export default function DeleteCarButton({ carId }: DeleteButtonProps) {
  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Do you really want to delete this car?",
    );

    if (isConfirmed) {
      try {
        await deleteCar(carId);
      } catch (error) {
        alert("Oops! Something went wrong!");
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="mt-2 w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-medium py-2 px-4 rounded-xl transition-colors border border-red-200 text-sm"
    >
      <Trash2 size={16} />
      <span>Delete</span>
    </button>
  );
}
