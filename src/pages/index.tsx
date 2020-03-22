import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage: React.FC = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Minase's Blog</h1>
      <section>
        <h1>最新記事</h1>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexData {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default IndexPage
