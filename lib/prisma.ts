import { PrismaClient } from "../prisma/generated-client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
// This shitty code needed so Next.js don't create 100500 connections to Supabase after every page refresh
