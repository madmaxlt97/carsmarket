import Image from "next/image";
import Link from "next/link";
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
}

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Link href={`cars/${car.id}`}>
      <div className="bg-white shadow-md hover:bg-gray-200 transition rounded-lg overflow-hidden max-w-sm">
        <Image
          src={car.imageUrl}
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
          <div className="flex gap-4 text-gray-600">
            <span>
              Engine: <b>{(car.displacement / 1000).toFixed(1)}l</b>
            </span>
            <span>
              Power: <b>{car.power}kW</b>
            </span>
          </div>
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
  );
};

export default CarCard;
