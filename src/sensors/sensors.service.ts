import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateSensorDto } from './create-sensor.dto';

@Injectable()
export class SensorsService {
  constructor(private readonly prisma: PrismaService) {}

  registerSensor(data: CreateSensorDto) {
    return this.prisma.sensor.create({
      data: {
        id: data.id,
        name: data.name,
        type: data.type,
      },
    });
  }

  getAllSensors() {
    return this.prisma.sensor.findMany();
  }

  getSensorById(id: number) {
    return this.prisma.sensor.findUnique({ where: { id } });
  }
}
