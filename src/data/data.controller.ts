import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateDataDto } from './create-data.dto';
import { DataService } from './data.service';

@Controller('sensor-data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post('')
  async createData(@Body() loggerData: CreateDataDto) {
    return await this.dataService.saveData(loggerData);
  }

  @Get(':id/last50')
  getLast50ofOneSensor(@Param('id', ParseIntPipe) sensorId: number) {
    return this.dataService.getLast50ofOneSensor(sensorId);
  }

  @Get(':id')
  getLastOneSensor(@Param('id', ParseIntPipe) sensorId: number) {
    return this.dataService.getOneSensor(sensorId);
  }
}
