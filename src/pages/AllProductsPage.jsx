import React from 'react';
import ProductList from '../components/ProductList';
import { GET_ALL_PRODUCTS } from '../graphql/productQueries';

const AllProductsPage = () => {
    return <ProductList title="All Products" query={GET_ALL_PRODUCTS} />;
};

export default AllProductsPage;