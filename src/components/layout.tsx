import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import { SiteTitleQuery } from '../../types/graphql-types'
import { Copyright } from './copyright'

export const layoutQuery = graphql`
  query SiteTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<SiteTitleQuery>(layoutQuery)

  return (
    <>
      <Header siteTitle={data.site?.siteMetadata?.title || ''} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Copyright copyright="©Tetsuya Minase" />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
