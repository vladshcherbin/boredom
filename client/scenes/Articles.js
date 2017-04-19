import React from 'react'
import PropTypes from 'prop-types'
import { gql, graphql } from 'react-apollo'

const Articles = (props) => {
  const { loading, error, articles } = props.data

  if (loading) {
    return <p>loading</p>
  }

  if (error) {
    return <p>request error</p>
  }

  return (
    <div>
      <p>articles</p>
      {articles.length ? (
        <ul>
          {articles.map(article => (
            <li key={article.id}>
              <div>
                <p>{article.title}</p>
                <p>{`Author: ${article.user.name}`}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>there are no articles :(</p>
      )}
    </div>
  )
}

Articles.propTypes = {
  data: PropTypes.object.isRequired
}

export default graphql(gql`
  query ArticlesWithUser {
    articles {
      id
      title
      user {
        name
      }
    }
  }
`)(Articles)
