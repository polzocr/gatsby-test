import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";


const About = () => {
    return (
        <Layout pageTitle="About Page">
            <p>Hi there, I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

export default About

export const Head = () => <title>About me</title>