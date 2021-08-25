import * as React from "react"
import App from './App'
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <Helmet>
      <html lang='en' />
      <title>Lorem Shreksum</title>
      <meta name='desciprtion' content="The world's only Shrek-themed Lorem Ipsum generator." />
      <App />
    </Helmet>
  )
}

export default IndexPage
