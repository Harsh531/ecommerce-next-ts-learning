"use client";

import CardComponent from "@/components/product/card";
import { useGetProductsQuery } from "@/lib/features/api/apiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setProducts, setSearchText } from "@/lib/features/product/productSlice"
import { ChangeEvent, useEffect } from "react";
import { Input } from "@/components/ui/input";


export default function ProductsPage() {
    const dispatch = useAppDispatch();
    const { data, isLoading, isError } = useGetProductsQuery(undefined);
    const list = useAppSelector((state) => state.product.list);
    const searchText = useAppSelector((state) => state.product.searchText);
    const filteredProducts = useAppSelector((state) => state.product.list.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase())));


    const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchText(e.target.value));
    }


    useEffect(() => {
        if (data) {
            dispatch(setProducts(data));
        }
    }, [data, dispatch]);


    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div> Error loading products </div>
    }


    return (
        <div className="flex flex-col px-4 py-2 gap-2">

            <div className="flex items-center justify-between">
                <h2 className="font-semibold flex-1">Products</h2>
                <div>
                    <Input placeholder="Search" type="search" value={searchText} onChange={handleChangeSearchText} />
                </div>
            </div>



            <div className="flex flex-col flex-1 overflow-y-auto overflow-hidden">
                <div className="grid grid-cols-4 gap-4 flex-1 ">
                    {filteredProducts.length === 0 ? (
                        <div className="col-span-4 text-center text-zinc-500">No products found</div>
                    ) : (
                        filteredProducts.map((product) => (
                            <div key={product.id} className="">
                                <CardComponent data={product} />
                            </div>
                        ))
                    )}
                </div>
            </div>


        </div>
    )
}
