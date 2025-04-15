import { Injectable } from '@nestjs/common';
import { CreateDataDto } from './create-data.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class DataService {
  constructor(private readonly prisma: PrismaService) {}

  async saveData(loggerData: CreateDataDto) {
    return this.prisma.sensorData.create({
      data: {
        sensorId: loggerData.sensorId,
        value: loggerData.value,
      },
    });
  }

  getOneSensor(sensorId: number) {
    return this.prisma.sensorData.findMany({
      where: { sensorId: sensorId },
    });
  }

  getLast50ofOneSensor(sensorId: number) {
    return this.prisma.sensorData.findMany({
      where: { sensorId: sensorId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }
}
