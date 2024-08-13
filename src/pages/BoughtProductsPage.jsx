import React from 'react';
import ProductList from '../components/ProductList';
import { GET_BOUGHT_PRODUCTS } from '../graphql/productQueries';

const BoughtProductsPage = () => {
    return <ProductList title="Bought Products" query={GET_BOUGHT_PRODUCTS} />;
};

export default BoughtProductsPage;