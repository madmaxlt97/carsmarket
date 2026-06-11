import { Skeleton } from "@/components/ui/Skeleton";
import CarCardSkeleton from "@/components/CarCardSkeleton";

export default function CarLoading() {
  const skeletons = Array.from({ length: 12 });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-2 w-full max-w-[2000px]">
      {Array.from({ length: 10 }).map((_, index) => (
        <CarCardSkeleton key={index} />
      ))}
    </div>
  );
}
