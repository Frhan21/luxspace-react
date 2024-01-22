import Header from "../parts/Header";
// import JustArrived from '../parts/Homepage/JustArrived'
// import BrowserRoom from '../parts/Homepage/BrowserRoom'
import Sitemaps from "../parts/Homepage/Sitemaps";
import Footer from "../parts/Footer";

import Breadcrumb from "../components/Breadcrumb";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShippingDetails from "../parts/Cart/ShippingDetails";
// import ProductDetails from '../parts/Details/ProductDetails'
// import Suggestion from '../parts/Details/Suggestion'
export default function Carts() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />

      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart/>
            <ShippingDetails/>
          </div>
        </div>
      </section>

      {/* <ProductDetails/>
      <Suggestion/> */}
      <Sitemaps />
      <Footer />
    </>
  );
}
