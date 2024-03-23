// src/components/ProductCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Typography variant="body2">Stock: {product.stock}</Typography>
        <Button variant="contained" color="primary">
          Edit
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
