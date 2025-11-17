import mongoose, { Document, Schema } from "mongoose";

export interface IBrand extends Document {
  name: string;
  slug: string;
  logo?: string;
  description?: string;
}

const brandSchema = new Schema<IBrand>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, lowercase: true, unique: true },
    logo: { type: String, trim: true },
    description: { type: String, trim: true }
  },
  { timestamps: true }
);

export const Brand = mongoose.model<IBrand>("Brand", brandSchema);
