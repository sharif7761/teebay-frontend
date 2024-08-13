import React from 'react';
import ProductList from '../components/ProductList';
import { GET_MY_PRODUCTS } from '../graphql/productQueries';

const MyProductsPage = () => {
    return <ProductList title="My Products" query={GET_MY_PRODUCTS} />;
};

export default MyProductsPage;