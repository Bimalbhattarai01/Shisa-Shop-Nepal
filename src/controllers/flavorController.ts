import { Request, Response } from "express";
import { Flavor } from "../models/Flavor";
import { slugify } from "../utils/slug";

export const createFlavor = async (req: Request, res: Response) => {
  try {
    const { name, slug } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const flavor = await Flavor.create({
      name,
      slug: slugify(slug || name)
    });
    res.status(201).json(flavor);
  } catch (error) {
    res.status(500).json({ message: "Failed to create flavor", error });
  }
};

export const getFlavors = async (_req: Request, res: Response) => {
  try {
    const flavors = await Flavor.find().sort({ name: 1 });
    res.json(flavors);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch flavors", error });
  }
};

export const getFlavorById = async (req: Request, res: Response) => {
  try {
    const flavor = await Flavor.findById(req.params.id);
    if (!flavor) {
      return res.status(404).json({ message: "Flavor not found" });
    }
    res.json(flavor);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch flavor", error });
  }
};

export const updateFlavor = async (req: Request, res: Response) => {
  try {
    const { name, slug } = req.body;
    const update: Record<string, string> = {};
    if (name !== undefined) update.name = name;
    if (slug !== undefined) update.slug = slugify(slug || name);

    const flavor = await Flavor.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!flavor) {
      return res.status(404).json({ message: "Flavor not found" });
    }
    res.json(flavor);
  } catch (error) {
    res.status(500).json({ message: "Failed to update flavor", error });
  }
};

export const deleteFlavor = async (req: Request, res: Response) => {
  try {
    const flavor = await Flavor.findByIdAndDelete(req.params.id);
    if (!flavor) {
      return res.status(404).json({ message: "Flavor not found" });
    }
    res.json({ message: "Flavor deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete flavor", error });
  }
};
