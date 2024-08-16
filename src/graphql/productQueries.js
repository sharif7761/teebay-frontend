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
  query AllProducts {
      allProducts {
        id
        title
        description
        purchasePrice
        rentPrice
        rentType
        categories
      }
    }
`;
export const GET_MY_PRODUCTS = gql`
  query Query {
      userProducts {
        id
        title
        description
        purchasePrice
        rentPrice
        rentType
        categories
        
      }
}
`;

export const GET_BOUGHT_PRODUCTS = gql`
  query BoughtProducts {
      boughtProducts {
        id
        product {
          id
          title
          description
          purchasePrice
          rentPrice
          rentType
          categories
        }
        user {
          id
          firstName
          lastName
          address
          email
          phone
          createdAt
          updatedAt
        }
        transactionType
        transactionDate
        price
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

export const DELETE_PRODUCT_MUTATION = gql`
mutation Mutation($deleteProductId: ID!) {
  deleteProduct(id: $deleteProductId)
}`