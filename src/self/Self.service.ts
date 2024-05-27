import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Self } from 'src/schemas/Self.schema';
import { CreateSelfDto } from './dto/CreateSelf.dto';
import { UpdateSelfDto } from './dto/UpdateSelf.dto';

@Injectable()
export class SelfService {
  constructor(@InjectModel(Self.name) private selfModel: Model<Self>) {}
  createSelf(createProjectDto: CreateSelfDto) {
    const newProject = new this.selfModel(createProjectDto);
    return newProject.save();
  }

  getSelf() {
    return this.selfModel.findOne();
  }

  updateSelf(updateProjectDto: UpdateSelfDto) {
    return this.selfModel.findOneAndUpdate({}, updateProjectDto, {
      upsert: true,
    });
  }
}
