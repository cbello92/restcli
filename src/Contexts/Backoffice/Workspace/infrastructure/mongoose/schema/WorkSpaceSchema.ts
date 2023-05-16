import mongoose, {Document, Schema} from 'mongoose';

const WorkSpaceSchema = new Schema(
  {name: {type: String, require: true}},
  {timestamps: true, collection: 'workspace', versionKey: false},
);
export default mongoose.model<Document>('workspace', WorkSpaceSchema);
