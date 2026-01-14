"use client";

import React from 'react'
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose, } from '../ui/drawer'
import { Button } from '../ui/button'
import CartListContainer from './cart-list-container'
import { useAppSelector } from '@/lib/hooks'

export default function CartDrawer() {
    const list = useAppSelector((state) => state.cart.items);

    return (
        <Drawer direction="right">
            <DrawerTrigger>
                <Button variant="outline" size="default">{`${list.length > 0 ? `(${list.length}) ` : ""}`}Cart Items</Button>
            </DrawerTrigger>

            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Cart Items {`${list.length > 0 ? `(${list.length}) ` : ""}`}</DrawerTitle>
                    <DrawerDescription>Items in your cart will be listed here</DrawerDescription>
                </DrawerHeader>


                <div className='flex flex-col flex-1 overflow-y-auto overflow-hidden bg-gray-50 '>
                    <CartListContainer cartItems={list} />
                </div>


                {list.length > 0 && (
                    <div className='flex items-center justify-between px-4 pt-2'>
                        <p className=''>Total: </p>
                        <p className='font-semibold'>${list.reduce((acc, item) => acc + item.product.price * item.quantity, 0)}</p>
                    </div>
                )}

                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button className="w-full" variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
