import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  HttpException,
  Patch,
} from '@nestjs/common';
import { SelfService } from './Self.service';
import { CreateSelfDto } from './dto/CreateSelf.dto';
import { UpdateSelfDto } from './dto/UpdateSelf.dto';
import mongoose from 'mongoose';

@Controller('self')
export class ProjectsController {
  constructor(private selfService: SelfService) {}

  @Post()
  createProject(@Body() createProjectDto: CreateSelfDto) {
    return this.selfService.createSelf(createProjectDto);
  }

  @Get()
  getSelf() {
    return this.selfService.getSelf();
  }
  @Patch()
  updateSelf(@Body() updateSelfDto: UpdateSelfDto) {
    return this.selfService.updateSelf(updateSelfDto);
  }
}
