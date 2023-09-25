import React, { useEffect, useState } from 'react'
import ProductContext from '../contexts/ProductContext'
import { ProductService } from '../services/ProductService';
import ProductList from '../components/products/ProductList';
import { Button } from 'primereact/button';
import ProductCards from '../components/products/ProductCards';

const Store = () => {

  const [listMode, setListMode] = useState(true);
  const [products, setProducts] = useState([]);

  const deleteProduct = (id) => {
    ProductService.deleteProduct(id)
      .then((res) => setProducts(currentProducts => currentProducts.filter(product => product.id !== id)))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    ProductService.getProducts().then(({data}) => setProducts(data));
}, []);


  return (
    <>
      <div className="grid mx-4">
        <div className="col">
          <h1>Store</h1>
        </div>
      </div>
      <ProductContext.Provider value={{products, setProducts, deleteProduct}}>
        <div className="grid mx-4">
          <div className="col">
            <div className="text-right my-2">
              <Button onClick={() => setListMode(true)} icon="pi pi-list" rounded text raised severity="info" aria-label="User" />
              <Button onClick={() => setListMode(false)} icon="pi pi-th-large" rounded text raised severity="info" aria-label="User" />
            </div>
            {listMode && <ProductList />}
            {!listMode && <ProductCards />}
          </div>
        </div>
      </ProductContext.Provider>
    </>
  )
}

export default Store