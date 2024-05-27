import { IsOptional, IsString } from 'class-validator';

export class UpdateSelfDto {
  @IsOptional()
  @IsString()
  intro: string;

  @IsOptional()
  @IsString()
  experience: string;
}
