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

export const SINGLE_PRODUCT_QUERY = gql`
    query ProductDetails($productDetailsId: ID!) {
      productDetails(id: $productDetailsId) {
        id
        title
        description
        purchasePrice
        rentPrice
        rentType
        categories
        creator {
          id
          firstName
          lastName
          address
          email
          phone
          createdAt
          updatedAt
        }
      }
    }`

export const UPDATE_PRODUCT = gql`
    mutation UpdateProduct($updateProductId: ID!, $productInput: ProductInput) {
      updateProduct(id: $updateProductId, productInput: $productInput) {
        id
        title
        description
        purchasePrice
        rentPrice
        rentType
        categories
        creator {
          id
          firstName
          lastName
          address
          email
          phone
          createdAt
          updatedAt
          
        }
      }
    }`