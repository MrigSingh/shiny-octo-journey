import { Fragment } from 'react'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      <BackToTop />
    </Fragment>
  )
}

export default MyApp
