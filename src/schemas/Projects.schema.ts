import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';

@Schema()
export class Projects {
    @Prop({unique: true, required: true})
    name: string;

    @Prop({required: true})
    description: string;


}

export const ProjectsSchema = SchemaFactory.createForClass(Projects)