import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'

const BlogPage = ({data}) => {

    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {data.allMdx.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))}
            </ul>
        </Layout>
    )
}



export const query = graphql`
    query {
        allMdx {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM D, YYYY")
                }
                id
            }
        }
    }
`

export const Head = () => <Seo title="My Blog Posts"/>

export default BlogPage