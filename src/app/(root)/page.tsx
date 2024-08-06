import { Container, TopBar, Title, Filters, ProductsGroupList, Stories } from "@/components/shared";
import { prisma } from "../../../prisma/prisma-client";
import { Suspense } from "react";
import { findPizzas, GetSearchParams } from "@/lib/find-pizzas";

export default async function Home({ searchParams }: { searchParams: GetSearchParams })  {
  
  const categories = await findPizzas(searchParams)


  return (
    <>
          <Stories />
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>

      <TopBar categories={categories.filter((category) => category.products.length > 0)}/>
      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Suspense>
              <Filters/>
            </Suspense>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
            {
              categories.map((category) => (
                category.products.length > 0 && (
                  <ProductsGroupList
                    key={category.id}
                    categoryId={category.id}
                    title={category.name}
                    items={category.products}
                  />
                )
              ))
            }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

