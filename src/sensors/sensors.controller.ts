import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { CreateSensorDto } from './create-sensor.dto';

@Controller('sensors')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {}

  @Post('register')
  register(@Body() data: CreateSensorDto) {
    return this.sensorsService.registerSensor(data);
  }

  @Get()
  getAll() {
    return this.sensorsService.getAllSensors();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.sensorsService.getSensorById(id);
  }
}
