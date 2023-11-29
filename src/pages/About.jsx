import React from "react";
import PromoSection from "../components/PromoSection/PromoSection";

function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col lg:items-start items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded bg-orange-50"
              alt="hero"
              src="https://ik.imagekit.io/dj/dj/logo/logo.png?updatedAt=1701258840163"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl my-4 font-medium text-gray-900">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <ul className="sm:ml-8 list-disc leading-relaxed text-left">
              <li>Handmade Designs</li>
              <li>Custom Designs</li>
              <li>Handmade Designs</li>
              <li>Custom Designs</li>
            </ul>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
