import { Schema, model } from 'mongoose';
import { TModuleVideo } from './module.interface';

const courseSchema = new Schema<TModuleVideo>({
  video: {
    type: String,
  },
  module: {
    type: Schema.Types.ObjectId,
    ref: 'Module',
  },
  
});

export const ModuleVideo = model<TModuleVideo>('ModuleVideo', courseSchema);
