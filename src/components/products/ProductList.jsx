import React, { useRef, useContext } from 'react'
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductContext from '../../contexts/ProductContext';
import { ProductService } from '../../services/ProductService';

const ProductList = () => {
    const {products, deleteProduct} = useContext(ProductContext);

const toast = useRef(null);



const accept = (rowData) => {
    deleteProduct(rowData.id)
    toast.current.show({ severity: 'info', summary: 'Confirmed', detail: `Article: '${rowData.title}' deleted`, life: 3000 });
}

const reject = () => {
    toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
}

const deleteItem = (rowData) => {
    confirmDialog({
        message: `Are you sure to delete this article: '${rowData.title}'`,
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => accept(rowData),
        reject
    });
};

const imageBodyTemplate = (product) => {
    return <img src={product.image} alt={product.title} className="w-6rem shadow-2 border-round" />;
};

const lockTemplate = (rowData, options) => {
    const icon = !rowData.active ? 'pi pi-lock' : 'pi pi-lock-open';
   
    return (
        <>  
            <Button type="button" icon={icon} className="p-button-sm p-button-text mr-2" onClick={() => console.log(rowData, options.frozenRow, options.rowIndex)} />
            <Button type="button" icon='pi pi-trash' severity="danger" className="p-button-sm p-button-text" onClick={() => deleteItem(rowData)} />
        </>
    )
};


    return (
    <>
        <Toast ref={toast} />
        <ConfirmDialog />
       
        <p>
            <div className="card">
                <DataTable value={products}>
                    <Column header="" body={imageBodyTemplate}></Column>
                    <Column field="title" header="title"></Column>
                    <Column field="body" header="body"></Column>
                    <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
                </DataTable>
            </div>
        </p>
    </>
    )
}

export default ProductList