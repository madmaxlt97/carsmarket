import { Skeleton } from "@/components/ui/Skeleton";
import CarCardSkeleton from "@/components/CarCardSkeleton";

export default function CarLoading() {
  const skeletons = Array.from({ length: 12 });

  return (
    <div className="p-6 w-full">
      <Skeleton className="h-8 w-48 mb-6" />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full max-w-none mx-auto">
        {skeletons.map((_, index) => (
          <CarCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
