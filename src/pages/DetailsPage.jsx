import Header from '../parts/Header'
// import JustArrived from '../parts/Homepage/JustArrived'
// import BrowserRoom from '../parts/Homepage/BrowserRoom'
import Sitemaps from '../parts/Homepage/Sitemaps'
import Client from '../parts/Client'
import Footer from '../parts/Footer'

import Breadcrumb from '../components/Breadcrumb'
import ProductDetails from '../parts/Details/ProductDetails'
import Suggestion from '../parts/Details/Suggestion'


export default function DetailsPage() {
  return (
    <>
      <Header theme="black"/>
      <Breadcrumb list={[
        {url:"/", name:"Home"},
        {url:"/categories/9123", name:"Office Room"},
        {url:"/categories/9123/products/7888", name:'Details'}
      ]}/>
      <ProductDetails/>
      <Suggestion/>
      <Client/>
      <Sitemaps/>
      <Footer/>
    </>
  )
}
