import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  slug: string;
  brand?: mongoose.Types.ObjectId;
  category?: mongoose.Types.ObjectId;
  description?: string;
  nicotine_level?: string;
  puff_count?: number;
  battery_capacity?: string;
  liquid_capacity?: string;
  coil_type?: string;
  images: string[];
  price: number;
  stock: number;
  flavors: mongoose.Types.ObjectId[];
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, lowercase: true, unique: true },
    brand: { type: Schema.Types.ObjectId, ref: "Brand" },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    description: { type: String, trim: true },
    nicotine_level: { type: String, trim: true },
    puff_count: { type: Number },
    battery_capacity: { type: String, trim: true },
    liquid_capacity: { type: String, trim: true },
    coil_type: { type: String, trim: true },
    images: { type: [String], default: [] },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    flavors: [{ type: Schema.Types.ObjectId, ref: "Flavor" }]
  },
  { timestamps: true }
);

export const Product = mongoose.model<IProduct>("Product", productSchema);
