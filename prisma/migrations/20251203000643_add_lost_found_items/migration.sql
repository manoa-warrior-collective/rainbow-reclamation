-- CreateEnum
CREATE TYPE "Status" AS ENUM ('LOST', 'FOUND', 'CLAIMED');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('OTHER', 'ELECTRONICS', 'CLOTHING', 'ACCESSORIES', 'DAILY_NECESSITIES');

-- CreateEnum
CREATE TYPE "Building" AS ENUM ('BIL', 'KELL', 'POST', 'CAMPUS_CENTER', 'OTHER');

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "Category" NOT NULL DEFAULT 'OTHER',
    "status" "Status" NOT NULL,
    "building" "Building" NOT NULL,
    "location" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "imageUrl" TEXT,
    "contactInfo" TEXT NOT NULL,
    "reportedBy" TEXT NOT NULL,
    "bountyStatus" BOOLEAN NOT NULL DEFAULT false,
    "bountyReward" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
