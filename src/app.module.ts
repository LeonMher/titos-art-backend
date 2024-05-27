import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/Projects.module';
import { SelfModule } from './self/Self.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/titos-art-backend'),
    ProjectsModule,
    SelfModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
