"use client";
import { useState } from "react";
import { Phone } from "lucide-react";

interface PhoneButtonProps {
  phone: string | null;
}

export default function PhoneButton({ phone }: PhoneButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  if (isVisible === false) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="w-64 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-medium py-2 px-4 rounded-xl flex items-center gap-2 transition-colors "
      >
        <Phone size={18} />
        <span>Click to see phone number</span>
      </button>
    );
  } else {
    return phone ? (
      <div className="w-64 flex flex-col items-center gap-2">
        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="w-full flex justify-center items-center gap-2 text-blue-600 hover:text-blue-700 hover:cursor-pointer font-semibold py-2 px-4 border border-blue-600 rounded-xl transition-colors"
        >
          <Phone size={18} />
          <span>{phone}</span>
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors mt-1 hover:cursor-pointer"
        >
          Hide number
        </button>
      </div>
    ) : (
      <span className="text-gray-500 italic py-2 px-4">No phone provided</span>
    );
  }
}
