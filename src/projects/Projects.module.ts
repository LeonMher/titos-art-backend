import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Projects, ProjectsSchema } from "src/schemas/Projects.schema";
import { ProjectsService } from "./Projects.service";
import { ProjectsController } from "./Projects.controller";

@Module({
    imports: [MongooseModule.forFeature([{name: Projects.name, schema: ProjectsSchema}])],
    controllers: [ProjectsController],
    providers: [ProjectsService],
    
})

export class ProjectsModule {}