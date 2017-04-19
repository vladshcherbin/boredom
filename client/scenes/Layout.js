import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Layout = ({ children }) => (
  <section className="boredom">
    <header>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/articles">Articles</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    </header>
    <main>
      {children}
    </main>
  </section>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
