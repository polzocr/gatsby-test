import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by follwing the Gatsby tutorial.</p>
    </Layout>
  )
}
export const Head = () => <title>Home Page</title>

export default IndexPage
