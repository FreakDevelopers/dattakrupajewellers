import React from "react";
import PromoSection from "../components/PromoSection/PromoSection";
import ProductLists from "../components/Products/ProductLists";
import FAQs from "../components/FAQs/FAQs";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactCTA from "../components/CTA/ContactCTA";

function Home() {
  return (
    <>
      <PromoSection />
      <ContactCTA />
      <ProductLists />
      <Testimonials />
      <FAQs />
    </>
  );
}

export default Home;
