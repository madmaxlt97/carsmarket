import { Skeleton } from "@/components/ui/Skeleton";

export default function CarDetailLoading() {
  return (
    <div className="w-full p-4 animate-pulse">
      <div className="mb-4 mt-2">
        <Skeleton className="h-[40px] w-32 rounded-xl" />
      </div>

      <main className="flex flex-col md:flex-row max-w-6xl gap-5">
        <div className="w-full md:w-1/2 lg:w-2/3">
          <div className="aspect-video overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
            <Skeleton className="w-full h-full" />
          </div>
        </div>

        <div className="w-full md:flex-1 space-y-4">
          <Skeleton className="h-8 w-3/4" />

          <Skeleton className="h-7 w-1/3 bg-green-100" />

          <div className="bg-slate-50 border border-slate-200 shadow-sm rounded-lg p-4">
            <Skeleton className="h-6 w-1/2 mb-4 pb-2 border-b" />

            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-1 bg-gray-50 rounded-lg h-[46px]"
                >
                  <Skeleton className="h-5 w-5 rounded-full shrink-0" />
                  <div className="flex flex-col w-full gap-1">
                    <Skeleton className="h-3 w-1/3" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 shadow-sm rounded-lg p-4 mt-8">
            <Skeleton className="h-6 w-1/3 mb-2 pb-2 border-b" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
