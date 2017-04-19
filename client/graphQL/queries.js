import { gql } from 'react-apollo'

export const articlesWithUser = gql`
  query ArticlesWithUser {
    articles {
      id
      title
      slug
      user {
        name
      }
    }
  }
`
export const articleFull = gql`
  query ArticleFull($slug: String!) {
    article(slug: $slug) {
      id
      title
      contents
      user {
        name
      }
    }
  }
`
