import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout pageTitle="Ah! Crashed">
    <SEO title="404: Not found" />
    <Link className="btn btn-primary text-uppercase" to={"/"}>
      Go Home
    </Link>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
