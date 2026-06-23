import Image from "next/image";
import Link from "next/link";
import DeleteCarButton from "./DeleteCarButton";
import UpdateCarButton from "./UpdateCarButton";
interface Car {
  id: string;
  brand: string;
  model: string;
  shape: string;
  displacement: number | null;
  power: number | null;
  price: number;
  year: number;
  mileage: number;
  imageUrl: string;
  description: string | null;
  fuelType: string | null;
  phone: string | null;
  [key: string]: any;
}

interface CarCardProps {
  car: Car;
  isEditable?: boolean;
}

const CarCard = ({ car, isEditable }: CarCardProps) => {
  return (
    <div className="flex flex-col max-w-sm w-full">
      <Link href={`cars/${car.id}`} target="_blank" rel="noopener noreferrer">
        <div className="bg-white shadow-md hover:bg-gray-200 transition rounded-lg overflow-hidden max-w-sm">
          <Image
            src={car.imageUrl || "/no-photo.png"}
            alt={`${car.brand} ${car.model}`}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">
              {car.brand} {car.model}
            </h3>
            <p className="text-gray-600">
              Year: <b>{car.year}</b>
            </p>
            <p className="text-gray-600">
              Shape: <b>{car.shape}</b>
            </p>

            {car.displacement && (
              <div className="flex gap-4 text-gray-600">
                <span>
                  Engine: <b>{(car.displacement / 1000).toFixed(1)}l</b>
                </span>
                <span>
                  Power: <b>{car.power}kW</b>
                </span>
              </div>
            )}

            <p className="text-gray-600">
              Fuel Type: <b>{car.fuelType}</b>
            </p>
            <p className="text-gray-600">
              Mileage: <b>{car.mileage} km</b>
            </p>
            <p className="text-2xl font-semibold text-green-600">
              €{car.price.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>
      {isEditable && (
        <div className="mt-2 px-1">
          <UpdateCarButton carId={car.id} />
          <DeleteCarButton carId={car.id} />
        </div>
      )}
    </div>
  );
};

export default CarCard;
