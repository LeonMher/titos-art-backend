import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Self {
  @Prop({ unique: true, required: true })
  intro: string;

  @Prop({ required: true })
  experience: string;
}

export const SelfSchema = SchemaFactory.createForClass(Self);
