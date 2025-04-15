/*
  Warnings:

  - You are about to drop the column `humidity` on the `Data` table. All the data in the column will be lost.
  - Added the required column `value` to the `Data` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `sensorId` on the `Data` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SensorType" AS ENUM ('HUMIDITY', 'TEMPERATURE');

-- AlterTable
ALTER TABLE "Data" DROP COLUMN "humidity",
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL,
DROP COLUMN "sensorId",
ADD COLUMN     "sensorId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Sensor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "SensorType" NOT NULL,

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "Sensor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
