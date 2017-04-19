import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { articlesWithUser } from '../api/articles'

const Articles = ({ data: { loading, error, articles }, match }) => {
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
                <p><Link to={`${match.url}/${article.slug}`}>{article.title}</Link></p>
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
  data: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default graphql(articlesWithUser)(Articles)
