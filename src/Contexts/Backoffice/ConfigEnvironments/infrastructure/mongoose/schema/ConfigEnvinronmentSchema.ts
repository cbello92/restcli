import mongoose, {Schema, Document} from 'mongoose';

const ConfigEnvironmentSchema = new Schema(
  {
    name: {type: String, required: true},
    context_environment: {
      required: true,
      type: Array({
        _id: {type: mongoose.Types.ObjectId, required: true},
        name: {type: String, required: true},
        value: {type: String, required: true},
      }),
      ref: 'environment',
    },
  },
  {timestamps: true, collection: 'config_environment', versionKey: false},
);

export default mongoose.model<Document>('config_environment', ConfigEnvironmentSchema);
