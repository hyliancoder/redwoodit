export const schema = gql`
  type User {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    name: String!
    subreddits: [Subreddit]!
    newsletters: [Newsletter]!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
  }

  input CreateUserInput {
    email: String!
    name: String!
  }

  input UpdateUserInput {
    email: String
    name: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`
