import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient().$extends({
  result: {
    // Make sure "Product" matches your model name in schema.prisma
    Product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
