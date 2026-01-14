import { TCartItem } from '@/lib/types/cart'
import React from 'react'
import CartItem from './cart-item'

type Props = {
    cartItems: TCartItem[]
}

export default function CartListContainer({ cartItems }: Props) {
    return (
        <div className='flex flex-col  gap-0 w-full h-full '>
            {cartItems?.length === 0 ? (
                <div className='flex flex-col items-center justify-center gap-4 flex-1 '>
                    <p className='text-center text-gray-600'>No items in your cart</p>
                </div>
            ) : cartItems.map((item) => (
                <CartItem key={item.product.id} cartProduct={item} />
            ))}
        </div>
    )
}