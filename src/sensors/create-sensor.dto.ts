import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { SensorTypeEnum } from '../common/sensorTypeEnum';

export class CreateSensorDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(SensorTypeEnum, {
    message: `type must be one of: ${Object.values(SensorTypeEnum).join(', ')}`,
  })
  type: SensorTypeEnum;
}
