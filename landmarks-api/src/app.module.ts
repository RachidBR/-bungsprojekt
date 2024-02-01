import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandmarksModule } from './landmarks/landmarks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Landmark } from './landmarks/entities/landmark.entity';

@Module({
  imports: [
    LandmarksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres_db', // TODO : Store in .env file
      port: 5432,
      username: 'rachid', // TODO : Store in .env file
      password: '123456', // TODO : Store in .env file
      database: 'historyDB', // TODO : Store in .env file
      entities: [Landmark],
      // synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
