import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "white",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#0a830a",
  height: '100vh',
  width: '100%'
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Somebody once told me...</h1>
      <p style={paragraphStyles}>
        This page doesn't exist
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/"><span style={{color: 'cyan', textDecoration: 'none'}}>Go back to your swamp</span></Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
