import * as React from "react"
import App from './App'
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <html lang='en' />
        <title>Lorem Shreksum</title>
        <meta name='description' content="The world's only Shrek-themed Lorem Ipsum generator." />
        <link rel="icon" 
          type="image/png" 
          href="../images/favicon.ico"></link>
      </Helmet>
      <App />
    </div>
  )
}

export default IndexPage
