import z from "zod";
import { productSchema } from "./product";


export const cartSchema = z.object({
    product : productSchema,
    productId : z.string(),
    quantity : z.number().min(1),
})

    // price : z.number().min(0),

export type TCartItem = z.infer<typeof cartSchema>