import React from "react";
import Testimonials from "../components/Testimonials/Testimonials";

function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col lg:items-start items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8 md:mb-0">
            <img
              className="object-cover object-center rounded bg-orange-50 shadow-[0px_0px_15px_0px_rgba(234,_179,_8,_1)]"
              alt="hero"
              src="https://ik.imagekit.io/dj/dj/logo/logo.png?updatedAt=1701258840163"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl my-4 font-medium text-gray-900">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed">
              Dattakrupa Jewellers invites you to explore a world where elegance
              meets craftsmanship. From captivating rings to statement
              necklaces, our curated collections redefine sophistication. Every
              piece is meticulously crafted to celebrate your unique style.
              Explore our timeless creations and make every moment
              unforgettable.
            </p>
            <ul className="sm:ml-8 list-disc leading-relaxed text-left">
              <li>Handmade Designs</li>
              <li>Custom Designs</li>
              <li>Handmade Designs</li>
              <li>Custom Designs</li>
            </ul>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}

export default About;
