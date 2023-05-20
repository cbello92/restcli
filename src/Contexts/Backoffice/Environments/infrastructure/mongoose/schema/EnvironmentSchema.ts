import mongoose, {Document, Schema} from 'mongoose';

const EnvironmentSchema = new Schema(
  {
    name: {type: String, required: true, unique: true},
    description: String,
    color: String,
    workspaceId: {type: mongoose.Types.ObjectId, required: true, ref: 'workspace'},
  },
  {timestamps: true, collection: 'environment', versionKey: false},
);

export default mongoose.model<Document>('environment', EnvironmentSchema);
