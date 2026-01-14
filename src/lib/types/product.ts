import z from "zod";

export const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    price : z.number().min(0),
    description: z.string().optional(),
    imgUrl: z.string().optional(),
});

export type Product = z.infer<typeof productSchema>;