import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import './blogTemplate.css'
import styled from 'styled-components'

const ArticleList = styled.ul`
  display: flex;
`
const ArticleTag = styled.li<any>`
  background-color: #f5f5f5;
  display: inline-block;
  margin: 0 10px;
  position: relative;
  &:before {
    background-color: ${({ tagName }) => getTagColor(tagName)};
    border-radius: 3px 0 0 3px;
    content: '';
    position: absolute;
    left: -10px;
    width: 10px;
    height: 100%;
  }
`
const getTagColor = (tag: string) => {
  switch (tag) {
    case 'JavaScript':
      return '#f1e05a'
    case 'TypeScript':
      return '#2b7489'
    default:
      return '#315665'
  }
}

const Template: React.FC<any> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <article className="article">
        <h1 className="article__title">{frontmatter.title}</h1>
        <time className="article__time">{frontmatter.date}</time>
        <ArticleList>
          {frontmatter.tag.map((content: string, index: number) => (
            <ArticleTag key={index} tagName={content}>
              {content}
            </ArticleTag>
          ))}
        </ArticleList>
        <article className="article__content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogTemplateData($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tag
      }
    }
  }
`
export default Template
