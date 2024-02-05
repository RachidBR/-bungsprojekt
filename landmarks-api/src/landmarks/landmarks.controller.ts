import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LandmarksService } from './landmarks.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Landmark } from './entities/landmark.entity';

@ApiTags('users')
@Controller('landmarks')
export class LandmarksController {
  constructor(private readonly landmarksService: LandmarksService) {}

  @Post()
  createLandmark(@Body() landmark: Landmark) {
    console.log('controller', landmark);
    return this.landmarksService.create(landmark);
  }

  @Get()
  @ApiOperation({
    summary: 'Find all landmarks',
    description: 'Returns the list of all the historic landmarks',
  })
  findAll() {
    return this.landmarksService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find all landmarks',
    description: 'Returns the list of all the historic landmarks',
  })
  findOne(@Param('id') id: string) {
    return this.landmarksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() landmark: Landmark) {
    return this.landmarksService.update(+id, landmark);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.landmarksService.remove(+id);
  }
}
