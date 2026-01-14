import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Product } from '@/lib/types/product'
import Image from 'next/image'
import AddToCartButton from './add-to-cart-button';

type CardComponentProps = {
    data: Product
}

export default function CardComponent({ data }: CardComponentProps) {
    return (
        <>
            <Card className=''>
                <CardHeader>
                    <CardTitle>{data.name}</CardTitle>
                    <CardDescription>{data.description}</CardDescription>
                    <CardAction>
                        <h4 className='font-semibold'>${data.price.toFixed(2)}</h4>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-1 overflow-hidden shadow rounded-sm relative min-h-48 max-h-52 w-full '>
                        <Image src={"https://picsum.photos/300"} alt={data.name} fill />
                    </div>
                </CardContent>
                <CardFooter>
                    <AddToCartButton data={data} />
                </CardFooter>
            </Card>
        </>
    )
}
