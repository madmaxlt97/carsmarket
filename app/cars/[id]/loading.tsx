// app/cars/[id]/loading.tsx
import { Skeleton } from "@/components/ui/Skeleton";

export default function CarDetailLoading() {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
      {/* Левая колонка: Заглушка под большую картинку */}
      <Skeleton className="aspect-[16/10] w-full rounded-xl" />

      {/* Правая колонка: Характеристики */}
      <div className="flex flex-col gap-4">
        <Skeleton className="h-10 w-3/4 mb-4" /> {/* Заголовок */}
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </div>
  );
}
