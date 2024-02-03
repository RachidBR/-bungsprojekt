import { Test, TestingModule } from '@nestjs/testing';
import { LandmarksService } from './landmarks.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Landmark } from './entities/landmark.entity';
import { Repository } from 'typeorm';
import { CreateLandmarkDto } from './dto/create-landmark.dto';
import { UpdateLandmarkDto } from './dto/update-landmark.dto';

describe('LandmarksService', () => {
  let service: LandmarksService;
  let repository: Repository<Landmark>;

  const mockLandmarkList: Landmark[] = [
    {
      id: 1,
      name: 'Kasbah of Algiers',
      country: 'Algeria',
      location: 'Algiers',
      historical_context: null,
      year_built: null,
      architect: null,
      image_url: null,
      created_at: new Date('2024-01-31'),
      updated_at: new Date('2024-01-31'),
    },
    {
      id: 2,
      name: 'Timgad',
      country: 'Algeria',
      location: 'Batna Province',
      historical_context: null,
      year_built: null,
      architect: null,
      image_url: null,
      created_at: new Date('2024-01-31'),
      updated_at: new Date('2024-01-31'),
    },
  ];

  const mockLandmark = {
    id: 1,
    name: 'Kasbah of Algiers',
    country: 'Algeria',
    location: 'Algiers',
    historical_context: null,
    year_built: null,
    architect: null,
    image_url: null,
    created_at: new Date('2024-01-31'),
    updated_at: new Date('2024-01-31'),
  };

  const mockCreateLandmarkDto: CreateLandmarkDto = {
    name: 'Test Landmark',
    country: 'Test Country',
    location: 'Test Location',
  };

  const expectedLandmark: Landmark = {
    id: 1,
    ...mockCreateLandmarkDto,
    created_at: new Date(),
    updated_at: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LandmarksService,
        {
          provide: getRepositoryToken(Landmark),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<LandmarksService>(LandmarksService);
    repository = module.get<Repository<Landmark>>(getRepositoryToken(Landmark));
  });

  describe('create', () => {
    it('should create a new landmark', async () => {
      jest
        .spyOn(repository, 'save')
        .mockImplementation(() => Promise.resolve(expectedLandmark));

      const result = await service.create(mockCreateLandmarkDto);

      expect(result).toEqual(expectedLandmark);
    });
  });

  describe('findAll', () => {
    it('should return an array of landmarks', async () => {
      jest
        .spyOn(repository, 'find')
        .mockImplementation(() => Promise.resolve(mockLandmarkList));

      const result = await service.findAll();

      expect(result).toEqual(mockLandmarkList);
    });
  });

  describe('findOne', () => {
    it('should return a specific landmark', async () => {
      const landmarkId = 1;

      jest
        .spyOn(repository, 'findOneBy')
        .mockImplementation(() => Promise.resolve(expectedLandmark));

      const result = await service.findOne(landmarkId);

      expect(result).toEqual(expectedLandmark);
    });
  });

  describe('update', () => {
    it('should update a landmark', async () => {
      const landmarkId = 1;
      const updateLandmarkDto: UpdateLandmarkDto = {
        name: 'Updated Landmark',
        country: 'Updated Country',
        location: 'Updated Location',
      };

      const existingLandmark: Landmark = {
        id: landmarkId,
        name: 'Test Landmark',
        country: 'Test Country',
        location: 'Test Location',
        created_at: new Date(),
        updated_at: new Date(),
      };

      const updatedLandmark: Landmark = {
        ...existingLandmark,
        ...updateLandmarkDto,
      };

      jest
        .spyOn(repository, 'findOneBy')
        .mockImplementation(() => Promise.resolve(existingLandmark));
      jest
        .spyOn(repository, 'save')
        .mockImplementation(() => Promise.resolve(updatedLandmark));

      const result = await service.update(landmarkId, updateLandmarkDto);

      expect(result).toEqual(updatedLandmark);
    });
  });

  describe('remove', () => {
    it('should remove a landmark', async () => {
      const landmarkId = 1;
      const existingLandmark: Landmark = {
        id: landmarkId,
        name: 'Test Landmark',
        country: 'Test Country',
        location: 'Test Location',
        created_at: new Date(),
        updated_at: new Date(),
      };

      jest
        .spyOn(repository, 'findOneBy')
        .mockImplementation(() => Promise.resolve(existingLandmark));
      jest
        .spyOn(repository, 'remove')
        .mockImplementation(() => Promise.resolve(existingLandmark));

      const result = await service.remove(landmarkId);

      expect(result).toEqual(existingLandmark);
    });
  });
});
