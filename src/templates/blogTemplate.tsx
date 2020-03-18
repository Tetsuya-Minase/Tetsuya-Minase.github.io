import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Template: React.FC<any> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <article className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
export default Template
