import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { articleFull } from '../graphQL/queries'
import PageStatus from '../components/PageStatus'

const Article = ({ data: { loading, error, article } }) => {
  if (loading) {
    return <p>loading</p>
  }

  if (error) {
    return <p>request error</p>
  }

  if (article) {
    return (
      <section>
        <p>{article.title}</p>
        <p>{article.contents}</p>
        <p>Author - {article.user.name}</p>
      </section>
    )
  }

  return (
    <PageStatus code={404}>
      <p>No such article :(</p>
    </PageStatus>
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired
}

export default graphql(articleFull, {
  options: ({ match }) => ({ variables: { slug: match.params.slug } })
})(Article)
