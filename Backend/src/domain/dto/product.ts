import {z} from "zod";

export const productDTO = z.object({
    image: z.string(),
    name: z.string(),
    price: z.string(),
    description: z.string(),
    categoryId:z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format")
  });
  

