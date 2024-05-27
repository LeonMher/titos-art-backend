import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Self, SelfSchema } from 'src/schemas/Self.schema';
import { SelfService } from './Self.service';
import { ProjectsController } from './Self.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Self.name, schema: SelfSchema }]),
  ],
  controllers: [ProjectsController],
  providers: [SelfService],
})
export class SelfModule {}
