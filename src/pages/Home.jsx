import React from "react";
import PromoSection from "../components/PromoSection/PromoSection";
import ProductLists from "../components/Products/ProductLists";
import FAQs from "../components/FAQs/FAQs";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <PromoSection />
      <ProductLists />
      <Testimonials />
      <FAQs />
    </>
  );
}

export default Home;
