import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import WarriorSection from "../components/Reusable/WarriorSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Coursecart from '../components/Cart/Coursecart'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Infoblock heading="About Us" />
      <Coursecart courses={data.courses} />
      <DualInfoblock heading="Our Team" />
    </Layout>
  )
}

export const query = graphql`
  query {
    courses:allContentfulCourses{
      edges{
        node{
          id
          title
          price
          category
          description{
            description
          }
          image {
            url
          }
        }
      }
    }
  }
`

export default IndexPage