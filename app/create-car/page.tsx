"use client";
import { createCar } from "./actions";
import { useActionState } from "react";

export default function createCarPage() {
  const [state, formAction, isPending] = useActionState(createCar, null);
  return (
    <div className="min-h-full p-8 flex justify-center items-start">
      <form
        action={formAction}
        className="grid grid-cols-1 gap-3 md:grid-cols-2 max-w-2xl bg-white border border-slate-200 shadow-lg rounded-lg p-4"
      >
        <input
          name="brand"
          placeholder="Brand..."
          className="border p-2 rounded"
          defaultValue={state?.fields?.brand || ""}
        />
        <input
          type="number"
          name="year"
          placeholder="Year..."
          className="border p-2 rounded"
          defaultValue={state?.fields?.year || ""}
        />
        <input
          name="model"
          placeholder="Model..."
          className="border p-2 rounded"
          defaultValue={state?.fields?.model || ""}
        />
        <select
          name="shape"
          className="border p-2 rounded"
          defaultValue={state?.fields?.shape || ""}
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
          defaultValue={state?.fields?.displacement || ""}
        />
        <input
          type="number"
          name="power"
          placeholder="Engine Power in kW"
          className="border p-2 rounded"
          defaultValue={state?.fields?.power || ""}
        />
        <select
          name="gearbox"
          className="border p-2 rounded"
          defaultValue={state?.fields?.gearbox || ""}
        >
          <option value="">Select gearbox type</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
          <option value="Semi-automatic">Semi-automatic</option>
        </select>
        <select
          name="driveType"
          className="border p-2 rounded"
          defaultValue={state?.fields?.driveType || ""}
        >
          <option value="">Select drive type</option>
          <option value="Front Wheel Drive">Front Wheel Drive</option>
          <option value="Rear Wheel Drive">Rear Wheel Drive</option>
          <option value="All Wheel Drive">All Wheel Drive</option>
        </select>
        <select
          name="fuelType"
          className="border p-2 rounded"
          defaultValue={state?.fields?.fuelType || ""}
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
          defaultValue={state?.fields?.mileage || ""}
        />
        <select
          name="color"
          className="border p-2 rounded"
          defaultValue={state?.fields?.color || ""}
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
          defaultValue={state?.fields?.doorNumber || ""}
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
          defaultValue={state?.fields?.price || ""}
        />
        <input
          type="number"
          name="phone"
          placeholder="Your phone number. Use country code (e.g. +370)"
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          id="description"
          placeholder="Enter car description here..."
          rows={5}
          className="border p-2 rounded resize-none md:col-span-2"
          defaultValue={state?.fields?.description || ""}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded md:col-span-2"
        >
          Add
        </button>
        {state?.error && (
          <p className="text-red-500 text-sm font-medium">{state.error}</p>
        )}
      </form>
    </div>
  );
}
