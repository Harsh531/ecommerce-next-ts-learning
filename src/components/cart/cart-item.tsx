"use client";

import { TCartItem } from '@/lib/types/cart'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useAppDispatch } from '@/lib/hooks'
import { removeFromCart } from '@/lib/features/cart/cartSlice';

type CartItemProps = {
    cartProduct: TCartItem
}

export default function CartItem({ cartProduct }: CartItemProps) {
    const dispatch = useAppDispatch();

    const handleRemoveItems = () => {
        dispatch(removeFromCart(cartProduct.product.id))
    }

    return (
        <div className='flex items-center gap-2 w-full px-4 py-2 bg-white'>

            <div className='w-20 h-20 flex rounded-sm  shadow relative p-2 overflow-hidden'>
                <Image src={cartProduct.product.imgUrl || ""} alt={cartProduct.product.name} fill />
            </div>

            <div className='flex-1 flex flex-col gap-0'>
                <p className='font-semibold  text-base'>{cartProduct.product.name}</p>
                <p className='opacity-60 text-xs' > {cartProduct.product.description} </p>
                <p className='font-semibold text-sm'>${cartProduct.product.price} * {cartProduct.quantity} = ${cartProduct.product.price * cartProduct.quantity}</p>
            </div>


            <Button variant="outline" size="icon" onClick={handleRemoveItems}>
                x
            </Button>



        </div>
    )
}
