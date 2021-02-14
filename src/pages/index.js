import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      Hello world!
      <div>
        <Link to="/post">go to Post</Link>
      </div>
    </Layout>
  )
}

export default Home
