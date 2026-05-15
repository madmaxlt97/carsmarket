"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CarSearch() {
  const router = useRouter();

  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    shape: "",
    fuelType: "",
    gearbox: "",
    driveType: "",
    minPrice: "",
    maxPrice: "",
    minYear: "",
    maxYear: "",
    minMileage: "",
    maxMileage: "",
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getCount = async () => {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, val]) => {
        if (val) params.append(key, val);
      });
      const res = await fetch(`/api/cars/count?${params.toString()}`);
      const data = await res.json();
      setCount(data.count);
    };
    getCount();
  }, [filters]);
  const handleSearch = (e?: React.MouseEvent) => {
    // Останавливаем браузер, чтобы он не делал свой грязный сабмит
    if (e) e.preventDefault();
    const params = new URLSearchParams();
    // 2. Проходим по нашему стейту фильтров
    Object.entries(filters).forEach(([key, value]) => {
      // 3. Добавляем в URL только если значение не пустое
      // value.trim() уберет случайные пробелы
      if (value && value.toString().trim() !== "") {
        params.append(key, value.toString());
      }
    });
    const queryString = params.toString();
    const path = queryString ? `/cars?${queryString}` : "/cars";

    router.push(path);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      //action="/cars"
      className="flex flex-col gap-3 w-full max-w-[260px] bg-slate-50 border border-slate-200 shadow-sm rounded-lg p-4"
    >
      <input
        name="brand"
        value={filters.brand} // Связываем!
        onChange={handleChange} // Слушаем!
        placeholder="Brand..."
        className="border p-2 rounded"
      />
      <input
        name="model"
        placeholder="Model..."
        value={filters.model} // Связываем!
        onChange={handleChange} // Слушаем!
        className="border p-2 rounded"
      />
      <select
        name="shape"
        value={filters.shape} // Связываем!
        onChange={handleChange} // Слушаем!
        className="border p-2 rounded"
      >
        <option value="">Select shape...</option>
        <option value="Sedan">Sedan</option>
        <option value="Wagon">Wagon</option>
        <option value="Hatchback">Hatchback</option>
        <option value="Coupe">Coupe</option>
        <option value="SUV">SUV</option>
        <option value="Pick-up">Pick-up</option>
        <option value="Van">Van</option>
        <option value="Other">Other</option>
      </select>
      <select
        name="fuelType"
        value={filters.fuelType} // Связываем!
        onChange={handleChange} // Слушаем!
        className="border p-2 rounded"
      >
        <option value="">Select fuel type</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="EV">EV</option>
        <option value="LPG">LPG</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select
        name="gearbox"
        value={filters.gearbox} // Связываем!
        onChange={handleChange} // Слушаем!
        className="border p-2 rounded"
      >
        <option value="">Select gearbox type</option>
        <option value="Manual">Manual</option>
        <option value="Automatic">Automatic</option>
        <option value="Semi-automatic">Semi-automatic</option>
      </select>
      <select
        name="driveType"
        value={filters.driveType} // Связываем!
        onChange={handleChange} // Слушаем!
        className="border p-2 rounded"
      >
        <option value="">Select drive type</option>
        <option value="Front Wheel drive">Front Wheel Drive</option>
        <option value="Rear Wheel Drive">Rear Wheel Drive</option>
        <option value="All Wheel Drive">All Wheel Drive</option>
      </select>
      <div className="flex gap-1 text-gray-600">
        <span>
          <input
            type="number"
            name="minYear"
            value={filters.minYear} // Связываем!
            onChange={handleChange} // Слушаем!
            placeholder="Year from"
            className="border p-1 w-28 rounded"
          />
        </span>
        <span>
          <input
            type="number"
            value={filters.maxYear} // Связываем!
            onChange={handleChange} // Слушаем!
            name="maxYear"
            placeholder="Year to"
            className="border p-1 w-28 rounded"
          />
        </span>
      </div>
      <div className="flex gap-1 text-gray-600">
        <span>
          <input
            type="number"
            name="minMileage"
            value={filters.minMileage} // Связываем!
            onChange={handleChange} // Слушаем!
            placeholder="Mileage from"
            className="border p-1 w-28 rounded"
          />
        </span>
        <span>
          <input
            type="number"
            name="maxMileage"
            value={filters.maxMileage} // Связываем!
            onChange={handleChange} // Слушаем!
            placeholder="Mileage to"
            className="border p-1 w-28 rounded"
          />
        </span>
      </div>
      <div className="flex gap-1 text-gray-600">
        <span>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice} // Связываем!
            onChange={handleChange} // Слушаем!
            placeholder="Min price..."
            className="border p-1 w-28 rounded"
          />
        </span>
        <span>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice} // Связываем!
            onChange={handleChange} // Слушаем!
            placeholder="Max price..."
            className="border p-1 w-28 rounded"
          />
        </span>
      </div>
      <div className="flex justify-center">
        <button
          // type="submit"
          onClick={handleSearch}
          className="bg-blue-500 text-white p-1 rounded w-[80%] "
        >
          Search ({count})
        </button>
      </div>
    </form>
  );
}
