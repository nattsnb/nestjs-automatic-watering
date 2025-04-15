/*
  Warnings:

  - You are about to drop the `SensorData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SensorData";

-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "sensorId" TEXT NOT NULL,
    "humidity" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);
