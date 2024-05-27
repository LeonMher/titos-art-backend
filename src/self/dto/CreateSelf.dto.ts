import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSelfDto {
  @IsNotEmpty()
  @IsString()
  intro: string;

  @IsNotEmpty()
  @IsString()
  experience: string;
}
