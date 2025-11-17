import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
  description?: string;
  parent?: mongoose.Types.ObjectId | null;
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, lowercase: true, unique: true },
    description: { type: String, trim: true },
    parent: { type: Schema.Types.ObjectId, ref: "Category", default: null }
  },
  { timestamps: true }
);

export const Category = mongoose.model<ICategory>("Category", categorySchema);
