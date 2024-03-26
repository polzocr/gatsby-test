import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by follwing the Gatsby tutorial.</p>
      <StaticImage
        alt="plein de text sympa"
        src="../images/stackoverflow.jpg"
      />
    </Layout>
  )
}
export const Head = () => <Seo title="Home Page" />

export default IndexPage
