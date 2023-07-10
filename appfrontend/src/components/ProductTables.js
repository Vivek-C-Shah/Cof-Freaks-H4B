import React from 'react';
import ProductTable from './ProductTable1';


const products = [
  {
    id: 1,
    name: 'Product A',
    manufacturingDate: '2022-01-01',
    expiryDate: '2023-01-01',
    manufacturingPlace: 'Factory 1',
    placesTravelled: 'USA, Canada',
  },
  {
    id: 2,
    name: 'Product B',
    manufacturingDate: '2022-02-01',
    expiryDate: '2023-02-01',
    manufacturingPlace: 'Factory 2',
    placesTravelled: 'Germany, France',
  },
  // more products...
];

const Apps = () => {
  return (
    <div>
      <ProductTable products={products} />
    </div>
  );
};

export default Apps;