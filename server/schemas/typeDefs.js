export const typeDefs = `
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }

  type Book {
    _id: ID!
    title: String!
    authors: [String!]!
    description: String!
    image: String
    link: String
  }

  input BookInput {
    bookId: String!
    title: String!
    authors: [String!]!
    description: String!
    image: String
    link: String
  }


  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book!]!
    bookCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }
`;

export default typeDefs;
