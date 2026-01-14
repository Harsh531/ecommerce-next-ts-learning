import { Product } from "@/lib/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "/products",
            providesTags: ["Product"]
        })
    })
});

export const { useGetProductsQuery } = apiSlice;