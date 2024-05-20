import { Controller, Post, Get, Body, Param, HttpException, Patch, Delete } from '@nestjs/common';    
import { ProjectsService } from './Projects.service';
import { CreateProjectDto } from './dto/CreateProject.dto';
import mongoose from 'mongoose';
import { UpdateProjectDto } from './dto/UpdateProject.dto';

@Controller('projects')
export class ProjectsController {

    constructor(
        private projectsService: ProjectsService
    ) {}

    @Post()
    createProject(@Body() createProjectDto: CreateProjectDto) {
        return this.projectsService.createProject(createProjectDto);
    }

    @Get()
    getAllProjects() {
        return this.projectsService.getAllProjects();
    }

    @Get(':id')
    async getProjectById(@Param('id') id: string) {
        const validId = mongoose.Types.ObjectId.isValid(id)
        if(!validId) {
            throw new HttpException('Invalid ID', 400);
        }

        const findProject = await this.projectsService.getProjectById(id);

       

        if(!findProject ) {
            throw new HttpException('Project not found', 404);
        }
        return findProject
    } 


    @Patch(':id')
    async updateProject(@Param ('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
        
        const validId = mongoose.Types.ObjectId.isValid(id)
        if(!validId) {
            throw new HttpException('Invalid ID', 400);
        }

        const updateProject = await this.projectsService.updateProject(id, updateProjectDto);

        if(!updateProject) {
            throw new HttpException('Project not found', 404);
        }
    }

    @Delete(':id')
    async deleteProject(@Param('id') id: string) {
        const validId = mongoose.Types.ObjectId.isValid(id)
        if(!validId) {
            throw new HttpException('Invalid ID', 400);
        }

        const deleteProject = await this.projectsService.deleteProject(id);
        if(!deleteProject) {
            throw new HttpException('Project not found', 404);
        }
    }
}