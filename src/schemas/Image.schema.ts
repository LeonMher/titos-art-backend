import { prop } from '@typegoose/typegoose';
import { Schema } from 'mongoose';

export class ApiImage {
  // Created automatically, just needed for TS
  readonly _id: Schema.Types.ObjectId;

  @prop({ required: false })
  name: string;

  @prop({ default: { data: null, contentType: null } })
  image_file: {
    data: Buffer;
    contentType: string;
  };

  @prop({ default: Date.now() })
  createdAt: Date;

  // We'll manually populate this property
  url: string;
}
