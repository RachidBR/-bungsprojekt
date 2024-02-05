import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Landmark } from './entities/landmark.entity';

@Injectable()
export class LandmarksService {
  constructor(
    @InjectRepository(Landmark) private repository: Repository<Landmark>,
  ) {}

  create(landmark: Landmark) {
    return this.repository.save(landmark);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, newLandmark: Landmark) {
    const landmark = await this.findOne(id);
    if (!landmark) {
      throw new NotFoundException(`Landmark with id ${id} not found`);
    }
    Object.assign(landmark, newLandmark);
    return this.repository.save(landmark);
  }

  async remove(id: number) {
    const landmark = await this.findOne(id);
    if (!landmark) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return this.repository.remove(landmark);
  }
}
