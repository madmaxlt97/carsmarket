import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const where: any = {};

    // 1. Обработка текстовых полей (частичное совпадение)
    const textFields = ["brand", "model"];
    textFields.forEach((field) => {
      const value = searchParams.get(field);
      if (value) {
        where[field] = {
          contains: value,
          mode: "insensitive",
        };
      }
    });

    // 2. Обработка категорий (точное совпадение)
    const categoryFields = ["shape", "fuelType", "gearbox", "driveType"];
    categoryFields.forEach((field) => {
      const value = searchParams.get(field);
      if (value) {
        where[field] = value;
      }
    });

    // 3. Обработка числовых диапазонов
    // Цена
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    if (minPrice || maxPrice) {
      where.price = {
        ...(minPrice && { gte: Number(minPrice) }),
        ...(maxPrice && { lte: Number(maxPrice) }),
      };
    }

    // Год
    const minYear = searchParams.get("minYear");
    const maxYear = searchParams.get("maxYear");
    if (minYear || maxYear) {
      where.year = {
        ...(minYear && { gte: Number(minYear) }),
        ...(maxYear && { lte: Number(maxYear) }),
      };
    }

    // Пробег
    const minMileage = searchParams.get("minMileage");
    const maxMileage = searchParams.get("maxMileage");
    if (minMileage || maxMileage) {
      where.mileage = {
        ...(minMileage && { gte: Number(minMileage) }),
        ...(maxMileage && { lte: Number(maxMileage) }),
      };
    }

    const count = await prisma.car.count({ where });

    return NextResponse.json({ count });
  } catch (error) {
    console.error("SEARCH_COUNT_ERROR", error);
    return NextResponse.json(
      { count: 0, error: "Internal Error" },
      { status: 500 },
    );
  }
}
