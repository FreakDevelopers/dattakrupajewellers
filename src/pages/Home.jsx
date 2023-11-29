import React from "react";
import PromoSection from "../components/PromoSection/PromoSection";
import ProductLists from "../components/Products/ProductLists";
import FAQs from "../components/FAQs/FAQs";

function Home() {
  return (
    <>
      <PromoSection />
      <ProductLists />
      <FAQs />
    </>
  );
}

export default Home;
