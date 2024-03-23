// src/services/productService.ts
import axios from 'axios';
import { setProducts } from '../redux/slices/productSlice';
import { AppDispatch } from '../redux/store';

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get('/api/products');
    dispatch(setProducts(response.data));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
