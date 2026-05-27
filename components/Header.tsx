"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use, useState } from "react";
import AuthModal from "./AuthModal";

export default function Header() {
  const pathName = usePathname();
  const links = [
    { href: "/create-car", label: "Sell you car" },
    { href: "/cars", label: "See cars" },
  ];
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md flex justify-between items-center p-2 pl-4 pr-4 bg-gradient-to-br from-[#4e4e4e]/70 to-[#676161]/70 ">
      <Link
        className="font-semibold text-[16px] sm:text-[20px] whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] min-[400px]:max-w-none"
        href="/"
      >
        CarsMarket
      </Link>
      <div className="flex items-center gap-2 min-[340px]:gap-4 sm:gap-6">
        {links.map((link) => {
          const isActive = pathName === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] min-[340px]:text-[12px] sm:text-[16px] transition-all duration-300 ${
                isActive
                  ? "text-white scale-110 font-bold"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <button
        onClick={() => setIsAuthOpen(true)}
        className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium transition"
      >
        Sign In
      </button>
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
  );
}
