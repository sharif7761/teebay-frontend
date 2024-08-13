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

export const GET_BOUGHT_PRODUCTS = gql`
  query GetBoughtProducts {
    boughtProducts {
      id
      title
      description
      purchasePrice
      rentPrice
      categories
    }
  }
`;

export const GET_SOLD_PRODUCTS = gql`
  query GetSoldProducts {
    soldProducts {
      id
      title
      description
      purchasePrice
      rentPrice
      categories
    }
  }
`;

export const GET_BORROWED_PRODUCTS = gql`
  query GetBorrowedProducts {
    borrowedProducts {
      id
      title
      description
      purchasePrice
      rentPrice
      categories
    }
  }
`;

export const GET_LENT_PRODUCTS = gql`
  query GetLentProducts {
    lentProducts {
      id
      title
      description
      purchasePrice
      rentPrice
      categories
    }
  }
`;