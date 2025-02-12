import {  PrismaClient } from '@prisma/client'

//extends prisma client with custom result transformer to convert price and rating fields to string
export const prisma = new PrismaClient().$extends({
    results: {
        product: {
            price: {
                compute(product) { return product.price.toString() }
            },
            rating: {
                compute(product) { return product.rating.toString() }
            },
        },
    },

})