import Header from "../parts/Header";
// import JustArrived from '../parts/Homepage/JustArrived'
// import BrowserRoom from '../parts/Homepage/BrowserRoom'

import Sitemaps from "../parts/Homepage/Sitemaps";
import Footer from "../parts/Footer";
import PageErrorMessage from "../parts/PageErrorMessage";

export default function NotFound() {
  return (
    <>
      <Header theme="black" />
      <PageErrorMessage/>
      <Sitemaps />
      <Footer />
    </>
  );
}
