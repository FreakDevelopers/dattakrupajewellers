import React from "react";

function Contact() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-8 mx-auto flex flex-wrap justify-evenly text-center items-center">
        <div className="bg-white flex justify-center items-center rounded shadow-xl w-full h-48 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
          <div className="px-14 w-full">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
              Shop No 1 Main Road Fish Market, near by Shivaji Chowk, opp.
              National Highway 66, Banda, Maharashtra 416510
            </p>
          </div>
        </div>
        <div className="bg-white flex justify-center items-center rounded shadow-xl w-full h-48 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
          <div className="px-14 w-full">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <p className="mt-1 break-all">dattakrupajewellers@gmail.com</p>
          </div>
        </div>
        <div className="bg-white flex justify-center items-center rounded shadow-xl w-full h-48 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
          <div className="px-14 w-full">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              NUMBER
            </h2>
            <p className="mt-1">+91 9876543210</p>
          </div>
        </div>
      </div>


      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="w-full lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start">
          <iframe
            width="100%"
            height="100%"
            className="inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.7905540154425!2d73.8581374748725!3d15.814994084828266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf8d28ace206bf%3A0x800710dc86c4fb7b!2sDATTAKRUPA%20JEWELLERS!5e0!3m2!1sen!2sin!4v1700313465336!5m2!1sen!2sin"
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Contact Us
          </h1>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
