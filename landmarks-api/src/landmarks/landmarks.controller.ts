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
import { CreateLandmarkDto } from './dto/create-landmark.dto';
import { UpdateLandmarkDto } from './dto/update-landmark.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('landmarks')
export class LandmarksController {
  constructor(private readonly landmarksService: LandmarksService) {}

  @Post()
  createLandmark(@Body() createLandmarkDto: CreateLandmarkDto) {
    return this.landmarksService.create(createLandmarkDto);
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
  update(
    @Param('id') id: string,
    @Body() updateLandmarkDto: UpdateLandmarkDto,
  ) {
    return this.landmarksService.update(+id, updateLandmarkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.landmarksService.remove(+id);
  }
}
