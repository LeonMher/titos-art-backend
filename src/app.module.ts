import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/Projects.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/titos-art-backend'), ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
