import Header from "../parts/Header";
import Hero from "../parts/Homepage/Hero";
import JustArrived from "../parts/Homepage/JustArrived";
import BrowserRoom from "../parts/Homepage/BrowserRoom";
import Sitemaps from "../parts/Homepage/Sitemaps";
import Client from "../parts/Client";
import Footer from "../parts/Footer";
import useScrollAnchor from "../helper/hooks/useScrollAnchor";
import useModalDOM from "../helper/hooks/useModalDOM";

export default function HomePages() {
  useScrollAnchor();
  useModalDOM();
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowserRoom />
      <JustArrived />
      <Client />
      <Sitemaps />
      <Footer />
    </>
  );
}
