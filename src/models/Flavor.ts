import mongoose, { Document, Schema } from "mongoose";

export interface IFlavor extends Document {
  name: string;
  slug: string;
}

const flavorSchema = new Schema<IFlavor>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, lowercase: true, unique: true }
  },
  { timestamps: true }
);

export const Flavor = mongoose.model<IFlavor>("Flavor", flavorSchema);
