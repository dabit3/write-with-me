// eslint-disable
// this is an auto generated file. This will be overwritten
import gql from 'graphql-tag'

export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    clientId
    markdown
    title
    createdAt
  }
}
`;
export const updatePost = gql`mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    clientId
    markdown
    title
    createdAt
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    clientId
    markdown
    title
    createdAt
  }
}
`;
