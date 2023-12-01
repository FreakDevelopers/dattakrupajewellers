import React from "react";

function PromoSection() {
  return (
    <>
      <section className="text-gray-600 mb-8">
        <div className="container mx-auto flex px-5 py-20 sm:py-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
              {/* Elegance Redefined: Discover Timeless Beauty at Dattakrupa
              Jewellers. */}
              Elevate Your Elegance with Dattakrupa Jewellers
              {/* <br className="hidden lg:inline-block" />
              readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed">
            Discover Exquisite Jewelry Crafted for Moments That Last a Lifetime.
              
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Explore Now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded shadow-[0px_0px_15px_0px_rgba(234,_179,_8,_1)]"
              alt="hero"
              src="https://ik.imagekit.io/dj/dj/jewellery/earring/e-3.jpg?updatedAt=1701258975020"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default PromoSection;
