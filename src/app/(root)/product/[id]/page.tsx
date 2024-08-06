import { notFound } from "next/navigation"

import { ChoosePizzaForm, ChooseProductForm, Container, GroupVariants, PizzaImage, ProductForm, Title } from "@/components/shared";
import { prisma } from "../../../../../prisma/prisma-client";
import { useCartStore } from "@/store";
import toast from "react-hot-toast";
import router from "next/router";

export default async function ProductPage( {params: {id}}:  {params:{id: string}} ){

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id)
    }, 
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true
            }
          }
        }
      },
      items: true
    }
  })


  if(!product) {
    return notFound();
  }
  
  return (
    <Container className="flex flex-col my-10">
     <ProductForm product={product} />
    </Container>
  )
}