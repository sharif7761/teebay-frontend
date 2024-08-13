import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    query getProducts {
        products {
            id
            title
            description
            price
        }
    }
`;

export const GET_ALL_PRODUCTS = gql`
  query GetMyProducts {
    myProducts {
      id
      title
      description
      purchasePrice
      rentPrice
      categories
    }
  }
`;
export const GET_MY_PRODUCTS = gql`
  query GetMyProducts {
    myProducts {
      id
      title
      description
      purchasePrice
      rentPrice
      categories
    }
  }
`;