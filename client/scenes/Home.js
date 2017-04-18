import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Home = ({ user }) => (
  <p>{`Hello, ${user}`}</p>
)

Home.propTypes = {
  user: PropTypes.string.isRequired
}

export default connect(state => ({
  user: state.user
}))(Home)
