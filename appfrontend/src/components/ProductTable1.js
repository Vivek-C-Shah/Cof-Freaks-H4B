import React from 'react';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { 
          productName: 'Product 1', 
          manufacturingDate: '2021-01-01',
          expiryDate: '2022-01-01',
          manufacturingPlace: 'Place 1',
          placesTravelled: ['Place 2', 'Place 3']
        },
        { 
          productName: 'Product 2', 
          manufacturingDate: '2021-02-01',
          expiryDate: '2022-02-01',
          manufacturingPlace: 'Place 4',
          placesTravelled: ['Place 5', 'Place 6']
        },
        { 
          productName: 'Product 3', 
          manufacturingDate: '2021-03-01',
          expiryDate: '2022-03-01',
          manufacturingPlace: 'Place 7',
          placesTravelled: ['Place 8', 'Place 9']
        }
      ]
    };
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mfd Date</th>
            <th>Exp Date</th>
            <th>Mfd Place</th>
            <th>Pathway</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.manufacturingDate}</td>
              <td>{product.expiryDate}</td>
              <td>{product.manufacturingPlace}</td>
              <td>{product.placesTravelled.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;