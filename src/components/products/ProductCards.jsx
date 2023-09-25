import React, { useContext } from 'react'
import ProductContext from '../../contexts/ProductContext';
import Product from './Product';


const ProductCards = () => {

    const {products} = useContext(ProductContext)

  return (
    <>
        <div className="grid">
        { products.map(product => (
            <div className="col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2">
                <Product product={product} />
            </div>
        )) }
        </div>
    </>
  )
}

export default ProductCards