import * as React from "react"
import App from './App'
import { Helmet } from "react-helmet"

import '../index.scss'
import favicon from '../images/favicon.ico'
import shrek from '../images/characters/shrek1.png'

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <html lang='en' />
        <title>Lorem Shreksum</title>
        <meta name='description' content="The world's only Shrek-themed Lorem Ipsum generator." />
        <link rel="icon" 
          type="image/png" 
          href={favicon}></link>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://loremshreksum.netlify.app" />
        <meta property="og:title" content="Lorem Shreksum" />
        <meta property="og:description" content="The world's only Shrek-themed Lorem Ipsum generator" />
        <meta property="og:image" content={shrek} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={shrek} />
        <meta property="twitter:title" content="Lorem Shreksum" />
        <meta property="twitter:description" content="The world's only Shrek-themed Lorem Ipsum generator" />
        <meta property="twitter:image" content={shrek} />
      </Helmet>
      <App />
    </div>
  )
}

export default IndexPage
