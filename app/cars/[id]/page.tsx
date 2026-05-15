import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar1,
  Fuel,
  Gauge,
  Zap,
  CarFront,
  Cylinder,
  Cog,
  SprayCan,
  DoorOpen,
  Orbit,
} from "lucide-react";

interface carPageProps {
  params: Promise<{ id: string }>;
}

export default async function CarPage({ params }: carPageProps) {
  const { id } = await params;

  const car = await prisma.car.findUnique({
    where: {
      id: id,
    },
  });
  if (!car) {
    return notFound();
  }

  return (
    <div className="max-w-[70%] mx-auto">
      <Link
        href="/cars"
        className="text-white hover:bg-blue-700 transition mb-2 ml-15 inline-block bg-blue-500 rounded-xl p-2 mt-2"
      >
        Back to List
      </Link>
      <main className="p-8 flex flex-col md:flex-row max-w-6xl mx-auto gap-5">
        <div className="w-full md:w-1/2 lg:w-2/3">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
            <Image
              src={car.imageUrl}
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="md:flex-1">
          <h1 className="text-2xl font-bold">
            {car.brand} {car.model}
          </h1>
          <p className="text-xl text-green-600 mb-2">
            Price: € {car.price.toLocaleString("fr-FR")}
          </p>
          <div className="bg-slate-50 border border-slate-200 shadow-sm rounded-lg p-4">
            <h2 className="font-bold text-lg border-b pb-2">Technical Data</h2>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-lg">
                <Calendar1 />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Year</span>
                  <span className="font-bold">{car.year}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-lg">
                <CarFront />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Shape</span>
                  <span className="font-bold">{car.shape}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-lg">
                <Cylinder />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Engine</span>
                  <span className="font-bold">
                    {(car.displacement / 1000).toFixed(1)}l
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 p-1 bg-gray-50 rounded-lg">
                <Zap />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Power</span>
                  <span className="font-bold">{car.power} kW</span>
                </div>
              </div>
              <div className="flex items-center gap-1 p-1 bg-gray-50 rounded-lg">
                <Cog />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Gearbox</span>
                  <span className="font-bold">{car.gearbox}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 p-1 bg-gray-50 rounded-lg">
                <Orbit />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Drive Type</span>
                  <span className="font-bold">{car.driveType}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-lg">
                <Fuel />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Fuel Type</span>
                  <span className="font-bold">{car.fuelType}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 p-1 bg-gray-50 rounded-lg">
                <DoorOpen />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Number of Doors</span>
                  <span className="font-bold">{car.doorNumber}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-lg">
                <Gauge />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Mileage</span>
                  <span className="font-bold">
                    {car.mileage.toLocaleString("fr-FR")} km
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-lg">
                <SprayCan />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Color</span>
                  <span className="font-bold">{car.color}</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-slate-50 border border-slate-200 shadow-sm rounded-lg p-4 mt-8">
            <h2 className="font-bold text-lg border-b pb-2">Description</h2>
            <p className="text-gray-600 mt-4 loading-relaxed">
              {car.description}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
