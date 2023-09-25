import axios from 'axios'

export const ProductService = {
  
    getProducts() {
        return axios.get('http://localhost:3001/articles')
    },

    postProduct(data) {
        return axios.post('http://localhost:3001/articles', data)
    },

    putProduct(data, id) {
        return axios.put(`http://localhost:3001/articles/${id}`, data)
    },

    patchProducts(data, id) {
        return axios.patch(`http://localhost:3001/articles/${id}`, data)
    },

    deleteProduct(id) {
        return axios.delete(`http://localhost:3001/articles/${id}`)
    },
 
};

