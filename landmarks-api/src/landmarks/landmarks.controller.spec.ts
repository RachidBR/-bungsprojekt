import { Test, TestingModule } from '@nestjs/testing';
import { LandmarksController } from './landmarks.controller';
import { LandmarksService } from './landmarks.service';

describe('LandmarksController', () => {
  let controller: LandmarksController;
  let service: LandmarksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LandmarksController],
      providers: [LandmarksService],
    }).compile();

    controller = module.get<LandmarksController>(LandmarksController);
    service = module.get<LandmarksService>(LandmarksService);
  });

  describe('findAll', () => {
    it('should return an array of landmarks', () => {
      const landmarkList = [
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

      jest
        .spyOn(service, 'findAll')
        .mockImplementation(() => Promise.resolve(landmarkList));

      expect(controller).toBeDefined();
      expect(controller.findAll()).toBe(landmarkList);
    });
  });

  describe('createLandmark', () => {
    it('should create a new landmark', async () => {
      const createdLandmark = {
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

      jest
        .spyOn(service, 'create')
        .mockImplementation(() => Promise.resolve(createdLandmark));

      expect(await controller.createLandmark(createdLandmark)).toBe(
        createdLandmark,
      );
    });
  });

  describe('findOne', () => {
    it('should return a specific landmark', async () => {
      const landmarkId = '1';

      const foundLandmark = {
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

      jest
        .spyOn(service, 'findOne')
        .mockImplementation(() => Promise.resolve(foundLandmark));

      expect(await controller.findOne(landmarkId)).toBe(foundLandmark);
    });
  });

  describe('update', () => {
    it('should update a landmark', async () => {
      const landmarkId = '1';
      const updateLandmarkDto = {
        // ... (provide necessary data for the update)
      };

      const updatedLandmark = {
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

      jest
        .spyOn(service, 'update')
        .mockImplementation(() => Promise.resolve(updatedLandmark));

      expect(await controller.update(landmarkId, updateLandmarkDto)).toBe(
        updatedLandmark,
      );
    });
  });

  describe('remove', () => {
    it('should remove a landmark', async () => {
      const landmarkId = '1';

      const removedLandmark = {
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

      jest
        .spyOn(service, 'remove')
        .mockImplementation(() => Promise.resolve(removedLandmark));

      expect(await controller.remove(landmarkId)).toBe(removedLandmark);
    });
  });
});
