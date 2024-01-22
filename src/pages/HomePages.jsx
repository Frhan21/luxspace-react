import Header from '../parts/Header'
import Hero from '../parts/Hero'
import JustArrived from '../parts/Homepage/JustArrived'
import BrowserRoom from '../parts/Homepage/BrowserRoom'
import Sitemaps from '../parts/Homepage/Sitemaps'
import Client from '../parts/Client'
import Footer from '../parts/Footer'

export default function HomePages() {
  return (
    <>
      <Header theme="white" position="absolute"/>
      <Hero/>
      <BrowserRoom/>
      <JustArrived/>
      <Client/>
      <Sitemaps/>
      <Footer/>
    </>
  )
}
