import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

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
export const Head = () => <title>Home Page</title>

export default IndexPage
