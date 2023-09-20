import prisma from "../database/database";
import { Product } from "@prisma/client";

function getProducts() {
  return prisma.product.findMany();
}

function getProduct(id: number) {
  return prisma.product.findUnique({
    where: { id }
  });
}

function createProduct(product: Product) {
  return prisma.product.create({
    data: product
  })
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;