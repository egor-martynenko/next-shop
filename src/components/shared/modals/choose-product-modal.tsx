"use client"
import React from 'react';

import { Dialog } from '@/components/ui';
import { DialogContent } from '@/components/ui/dialog';


import { ProductWithRelations } from '@/@types/prisma';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { ProductForm } from '../product-form';

interface Props {
  product: ProductWithRelations; 
  className?: string;
}

export  const ChooseProductModal: React.FC<Props> = ({className, product}) => {

  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent 
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>

            <ProductForm product={product} onSubmit={() => router.back()}/>
        
      </DialogContent>
    </Dialog>
  );
};