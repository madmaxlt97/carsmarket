import Link from "next/link";
import { Pen } from "lucide-react";

interface UpdateButtonProps {
  carId: string;
}
export default function UpdateCarButton({ carId }: UpdateButtonProps) {
  return (
    <Link
      href={`/user-dashboard/edit/${carId}`}
      className="mt-2 w-full flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 text-green-600 font-medium py-2 px-4 rounded-xl transition-colors border border-red-200 text-sm"
    >
      <Pen size={16} />
      <span>Edit</span>
    </Link>
  );
}
