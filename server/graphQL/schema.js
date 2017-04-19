export default `
  type User {
    id: Int!
    name: String!
    articles: [Article]
  }

  type Article {
    id: Int!
    title: String!
    user: User!
  }

  type Query {
    article(id: Int!): Article
    articles: [Article]
    user(id: Int!): User
    users: [User]
  }

  schema {
    query: Query
  }
`
