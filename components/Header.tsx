"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import AuthModal from "./AuthModal";

export default function Header() {
  const pathName = usePathname();
  const links = [
    { href: "/create-car", label: "Sell you car" },
    { href: "/cars", label: "See cars" },
  ];
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { data: session, status } = useSession();
  return (
    <>
      {" "}
      {/* <--- ОБЯЗАТЕЛЬНО: Обернули в React-фрагмент */}
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

        <div className="flex items-center gap-4">
          {status === "loading" ? (
            <div className="h-8 w-20 bg-slate-100 animate-pulse rounded-lg" />
          ) : session?.user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full">
                👋 {session.user.name || session.user.email}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-sm text-red-500 hover:text-red-700 font-medium transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition shadow-sm"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
      {/* <--- ПЕРЕНЕСЛИ СЮДА: Теперь модалка вне тега nav и встанет ровно по центру экрана */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
