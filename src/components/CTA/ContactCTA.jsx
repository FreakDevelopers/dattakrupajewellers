import React from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

function ContactCTA() {
  return (
    <section className="bg-gray-800 rounded-lg py-14 mb-4">
      <div className="max-w-screen-xl mx-auto px-4 gap-x-12 justify-between md:flex md:px-8">
        <div className="max-w-xl">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl">
            Connect With Dattakrupa Jewellers
            <div className="h-1 w-24 bg-yellow-500 mt-1"></div>
          </h3>
          <p className="mt-3 text-gray-300">
            At Dattakrupa Jewellers, we value your inquiries and are ready to
            assist you on your journey to find the perfect piece of jewelry.
            Whether you have questions about our collections, need help with
            sizing, or want to inquire about a custom design, our dedicated team
            is here for you. Click the 'Contact Us' button below and let's make
            your jewelry dreams a reality.
          </p>
        </div>
        <div className="flex-none mt-4 md:mt-0">
          <Link
            to="/contact"
            className="inline-flex items-center py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-200 active:bg-gray-200 rounded-lg shadow-md hover:shadow-none"
          >
            Contact Us
            <FaArrowCircleRight className="inline ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
