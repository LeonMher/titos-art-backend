import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/Projects.module';
import { SelfModule } from './self/Self.module';
import { ImageModule } from './image/Image.module';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/titos-art-backend'),
    TypegooseModule.forRoot('mongodb://127.0.0.1/titos-art-backend'),
    ProjectsModule,
    SelfModule,
    ImageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
