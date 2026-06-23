"use client";
import { Car } from "@prisma/client";
import { useActionState } from "react";

interface CarFormProps {
  action: (prevState: any, formData: FormData) => Promise<any>;
  initialData?: Car | null;
  submitButtonText?: string;
}

export default function CarForm({
  action,
  initialData = null,
  submitButtonText = "Add",
}: CarFormProps) {
  const [state, formAction, isPending] = useActionState(action, null);

  return (
    <form
      action={formAction}
      className="grid grid-cols-1 gap-3 md:grid-cols-2 max-w-2xl bg-white border border-slate-200 shadow-lg rounded-lg p-4"
    >
      {initialData?.id && (
        <input type="hidden" name="carId" value={initialData.id} />
      )}
      <input
        name="brand"
        placeholder="Brand..."
        className="border p-2 rounded"
        defaultValue={state?.fields?.brand || initialData?.brand || ""}
      />
      <input
        type="number"
        name="year"
        placeholder="Year..."
        className="border p-2 rounded"
        defaultValue={state?.fields?.year || initialData?.year || ""}
      />
      <input
        name="model"
        placeholder="Model..."
        className="border p-2 rounded"
        defaultValue={state?.fields?.model || initialData?.model || ""}
      />
      <select
        name="shape"
        className="border p-2 rounded"
        defaultValue={state?.fields?.shape || initialData?.shape || ""}
      >
        <option value="">Select shape...</option>
        <option value="Sedan">Sedan</option>
        <option value="Wagon">Wagon</option>
        <option value="Hatchback">Hatchback</option>
        <option value="Coupe">Coupe</option>
        <option value="SUV">SUV</option>
        <option value="Pick-up">Pick-up</option>
        <option value="Van">Van</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="number"
        name="displacement"
        placeholder="Engine Displacement in cm3 (e.g. 3.0 = 3000)"
        className="border p-2 rounded"
        defaultValue={
          state?.fields?.displacement || initialData?.displacement || ""
        }
      />
      <input
        type="number"
        name="power"
        placeholder="Engine Power in kW"
        className="border p-2 rounded"
        defaultValue={state?.fields?.power || initialData?.power || ""}
      />
      <select
        name="gearbox"
        className="border p-2 rounded"
        defaultValue={state?.fields?.gearbox || initialData.gearbox || ""}
      >
        <option value="">Select gearbox type</option>
        <option value="Manual">Manual</option>
        <option value="Automatic">Automatic</option>
        <option value="Semi-automatic">Semi-automatic</option>
      </select>
      <select
        name="driveType"
        className="border p-2 rounded"
        defaultValue={state?.fields?.driveType || initialData.driveType || ""}
      >
        <option value="">Select drive type</option>
        <option value="Front Wheel Drive">Front Wheel Drive</option>
        <option value="Rear Wheel Drive">Rear Wheel Drive</option>
        <option value="All Wheel Drive">All Wheel Drive</option>
      </select>
      <select
        name="fuelType"
        className="border p-2 rounded"
        defaultValue={state?.fields?.fuelType || initialData.fuelType || ""}
      >
        <option value="">Select fuel type</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="EV">EV</option>
        <option value="LPG">LPG</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="number"
        name="mileage"
        placeholder="Mileage in KM..."
        className="border p-2 rounded"
        defaultValue={state?.fields?.mileage || initialData.mileage || ""}
      />
      <select
        name="color"
        className="border p-2 rounded"
        defaultValue={state?.fields?.color || initialData.color || ""}
      >
        <option value="">Select color</option>
        <option value="Silver">Silver</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Gray">Gray</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="Yellow">Yellow</option>
        <option value="Orange">Orange</option>
        <option value="Purple">Purple</option>
        <option value="Brown">Brown</option>
      </select>
      <select
        name="doorNumber"
        className="border p-2 rounded"
        defaultValue={state?.fields?.doorNumber || initialData.doorNumber || ""}
      >
        <option value="">Select number of doors</option>
        <option value="2/3">2/3</option>
        <option value="4/5">4/5</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="number"
        name="price"
        placeholder="Price in €..."
        className="border p-2 rounded"
        defaultValue={state?.fields?.price || initialData.price || ""}
      />
      <input
        type="number"
        name="phone"
        placeholder="Your phone number. Use country code (e.g. +370)"
        className="border p-2 rounded"
        defaultValue={state?.fields?.number || initialData.number || ""}
      />
      <textarea
        name="description"
        id="description"
        placeholder="Enter car description here..."
        rows={5}
        className="border p-2 rounded resize-none md:col-span-2"
        defaultValue={
          state?.fields?.description || initialData.description || ""
        }
      ></textarea>
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-500 text-white p-2 rounded md:col-span-2"
      >
        {isPending ? "Saving..." : submitButtonText}
      </button>
      {state?.error && (
        <p className="text-red-500 text-sm font-medium">{state.error}</p>
      )}
    </form>
  );
}
