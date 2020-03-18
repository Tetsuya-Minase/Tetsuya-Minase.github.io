import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export const imageQuery = graphql`
  query ImageData {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Image = () => {
  const data = useStaticQuery(imageQuery)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
