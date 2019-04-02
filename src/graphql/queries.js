// eslint-disable
// this is an auto generated file. This will be overwritten
import gql from 'graphql-tag'

export const getPost = gql`query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    clientId
    markdown
    title
    createdAt
  }
}
`;
export const listPosts = gql`query ListPosts{
  listPosts(limit: 500) {
    items {
      id
      clientId      
      title
      createdAt
    }
  }
}
`;
