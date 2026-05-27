import { prisma } from "@/lib/prisma";
import CarCard from "@/components/CarCard";
import CarSearch from "@/components/CarSearch";

interface CarsPageProps {
  searchParams: Promise<{
    brand?: string;
    model?: string;
    shape?: string;
    minPrice?: string;
    maxPrice?: string;
    minMileage?: string;
    maxMileage?: string;
    minYear?: string;
    maxYear?: string;
    fuelType?: string;
    gearbox?: string;
    driveType?: string;
    color?: string;
    createdAt?: string;
  }>;
}

export default async function CarListPage({ searchParams }: CarsPageProps) {
  const params = await searchParams;
  const clean = (value?: string) =>
    value && value.trim() !== "" ? value : undefined;

  const toNumber = (value?: string) => (value ? Number(value) : undefined);

  const cars = await prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      brand: clean(params.brand)
        ? {
            contains: clean(params.brand),
            mode: "insensitive",
          }
        : undefined,

      model: clean(params.model)
        ? {
            contains: clean(params.model),
            mode: "insensitive",
          }
        : undefined,

      shape: clean(params.shape),
      fuelType: clean(params.fuelType),
      gearbox: clean(params.gearbox),
      driveType: clean(params.driveType),
      color: clean(params.color),
      year:
        params.minYear || params.maxYear
          ? {
              ...(params.minYear && { gte: toNumber(params.minYear) }),
              ...(params.maxYear && { lte: toNumber(params.maxYear) }),
            }
          : undefined,

      price:
        params.minPrice || params.maxPrice
          ? {
              ...(params.minPrice && { gte: toNumber(params.minPrice) }),
              ...(params.maxPrice && { lte: toNumber(params.maxPrice) }),
            }
          : undefined,

      mileage:
        params.minMileage || params.maxMileage
          ? {
              ...(params.minMileage && { gte: toNumber(params.minMileage) }),
              ...(params.maxMileage && { lte: toNumber(params.maxMileage) }),
            }
          : undefined,
    },
  });
  console.log(params);
  const carCounter = cars.length;
  if (cars.length === 0) {
    return <div>No cars posted yet</div>;
  }
  return (
    <div className="bg-gray-50">
      <h1 className="flex justify-center items-center gap-2 text-lg text-slate-500 font-medium sm:text-xl md:text-2xl pt-4">
        <span>See Available cars</span>
        <span className="bg-slate-100 px-2 py-0.5 rounded-full text-sm text-slate-600">
          ({carCounter})
        </span>
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 min-h-screen">
        {/* Added flex and items-start to align the search form to the left */}
        <CarSearch />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-2 w-full max-w-[2000px]">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={{
                ...car,
                brand: car.brand,
                model: car.model,
                year: car.year,
                price: car.price,
                image: car.imageUrl,
                description: car.description,
                fuelType: car.fuelType,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
