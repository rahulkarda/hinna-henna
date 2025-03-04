import '../styles/globals.css'
import '../styles/custom-styles.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
