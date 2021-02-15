import { Link } from "gatsby"
import React from "react"
import Countre from "../components/countre"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      Hello world!
      <div>
        <Link to="/post">go to Post</Link>
      </div>
      <Countre />
    </Layout>
  )
}

export default Home
