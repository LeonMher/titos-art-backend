import {
  Controller,
  Post,
  Get,
  Body,
  Patch,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { SelfService } from './Self.service';
import { CreateSelfDto } from './dto/CreateSelf.dto';
import { UpdateSelfDto } from './dto/UpdateSelf.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

const storage = diskStorage({
  destination: './public',
  filename: (req, file, cb) => {
    // const name = file.originalname.split('.')[0];
    const extension = extname(file.originalname);
    // const randomName = Array(32)
    //   .fill(null)
    //   .map(() => Math.round(Math.random() * 16).toString(16))
    //   .join('');
    cb(null, `profilepic${extension}`);
  },
});

@Controller('self')
export class ProjectsController {
  constructor(private selfService: SelfService) {}

  @Post()
  createProject(@Body() createProjectDto: CreateSelfDto) {
    return this.selfService.createSelf(createProjectDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { storage }))
  uploadFile(@UploadedFile() file) {
    return { message: 'File uploaded successfully!', filename: file.filename };
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
