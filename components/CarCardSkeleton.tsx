import { Skeleton } from "./ui/Skeleton";

export default function CarCardSkeleton() {
  return (
    <div className="bg-white shadow-md hover:bg-gray-200 transition rounded-lg overflow-hidden max-w-sm">
      <Skeleton className="w-full h-48" />

      <div className="p-4 space-y-3">
        <Skeleton className="h-7 w-3/4 mb-1" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-2/3" />
          <div className="flex gap-4">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/3" />
          </div>
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-3/5" />
        </div>

        <Skeleton className="h-8 w-1/3 mt-4 bg-green-100" />
      </div>
    </div>
  );
}
