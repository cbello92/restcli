import mongoose, {Document, Schema} from 'mongoose';

const VerbHttpSchema = new Schema(
  {name: {type: String}},
  {timestamps: true, collection: 'verb_http', versionKey: false},
);

export default mongoose.model<Document>('verb_http', VerbHttpSchema);
