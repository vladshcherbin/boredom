import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

const PageStatus = ({ code, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = code // eslint-disable-line no-param-reassign
      }

      return children
    }}
  />
)

PageStatus.propTypes = {
  code: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
}

export default PageStatus
