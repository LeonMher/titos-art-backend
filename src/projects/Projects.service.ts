import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Projects } from 'src/schemas/Projects.schema';
import { CreateProjectDto } from './dto/CreateProject.dto';
import { UpdateProjectDto } from './dto/UpdateProject.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Projects.name) private projectsModel: Model<Projects>,
  ) {}
  createProject(createProjectDto: CreateProjectDto) {
    const newProject = new this.projectsModel(createProjectDto);
    return newProject.save();
  }

  getAllProjects() {
    return this.projectsModel.find();
  }

  getProjectById(id: string) {
    return this.projectsModel.findById(id);
  }

  updateProject(id: string, updateProjectDto: UpdateProjectDto) {
    return this.projectsModel.findByIdAndUpdate(id, updateProjectDto);
  }

  deleteProject(id: string) {
    return this.projectsModel.findByIdAndDelete(id);
  }
}
