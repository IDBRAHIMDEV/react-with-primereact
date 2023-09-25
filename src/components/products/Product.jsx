import React, { useContext } from 'react'
import voca from 'voca'

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import ProductContext from '../../contexts/ProductContext';

const Product = ({product}) => {

    const {deleteProduct} = useContext(ProductContext)

    const header = (image) => {
        return (<img alt="Card" src={image} />)
    };

    const footer = ({id, active}) => {

        const icon = !active ? 'pi pi-lock' : 'pi pi-lock-open';
        const label = !active ? 'disable' : 'enable';
        return (
        
            <div className="flex flex-wrap justify-content-center gap-2">
                <Button label={label} icon={icon} />
                <Button onClick={ () => deleteProduct(id) } label="Remove" icon='pi pi-trash' severity="danger" className="p-button-outlined p-button-secondary" />
            </div>
        );
    }

  return (
    <>
        <Card title={product.title} subTitle="" footer={() => footer(product) } header={() => header(product.image)}>
            <p className="m-0">{voca.substring(product.body, 0, 25)}</p>
        </Card>
    </>
  )
}

export default Product