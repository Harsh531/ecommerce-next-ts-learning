import { useAppDispatch } from "@/lib/hooks";
import { Button } from "../ui/button"
import { addToCart } from "@/lib/features/cart/cartSlice";
import { Product } from "@/lib/types/product";


type Props = {
    data: Product
}

export default function AddToCartButton({ data }: Props) {
    const dispatch = useAppDispatch();


    const handleAddToCart = () => {
        dispatch(addToCart(data))
    }

    return (
        <>
            <Button variant="default" size="default" onClick={handleAddToCart}>Add to Cart</Button>

        </>
    )
}