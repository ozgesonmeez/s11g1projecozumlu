import React, { useContext } from 'react'; 
import styled from 'styled-components';
import { ProductContext } from '../contexts/ProductContext'; 
import { CartContext } from '../contexts/CartContext';
import Product from './Product';

const ScProducts = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);

    img {
      width: 100%;
    }
  }
`;

const Products = () => {

  const { products } = useContext(ProductContext);
  const { addItem } = useContext(CartContext);

  
  if (!products) return <div>Yükleniyor...</div>;

  return (
    <ScProducts>
      
      {products.map((product) => (
        <Product 
          key={product.id} 
          product={product} 
          addItem={addItem} 
        />
      ))}
    </ScProducts>
  );
};

export default Products;
