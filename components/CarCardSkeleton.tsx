import { Skeleton } from "./ui/Skeleton";

export default function CarCardSkeleton() {
  return (
    <div className="border border-slate-200 rounded-lg p-3 bg-white">
      {/* Картинка */}
      <Skeleton className="aspect-[16/10] w-full mb-3" />

      {/* Название */}
      <Skeleton className="h-5 w-3/4 mb-2" />

      {/* Цена */}
      <Skeleton className="h-6 w-1/2 mb-4" />

      {/* Характеристики */}
      <div className="grid grid-cols-2 gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
