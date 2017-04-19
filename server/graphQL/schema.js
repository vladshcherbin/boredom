export default `
  type User {
    id: Int!
    name: String!
    articles: [Article]
  }

  type Article {
    id: Int!
    title: String!
    slug: String!
    contents: String!
    user: User!
  }

  type Query {
    article(slug: String!): Article
    articles: [Article]
    user(id: Int!): User
    users: [User]
  }

  schema {
    query: Query
  }
`
