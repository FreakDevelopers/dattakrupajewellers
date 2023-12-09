import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then((error) => {
        // TODO: Remove once fully tested, and add toast for success message.
        console.log(error.text);
      });
  };

  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact:
        "A/P Banda KATTA Corner, Shivaji Chawk Fish Market Road, Banda, Maharashtra, 416511, India",
      title: "OUR SHOP",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+91 9876543210",
      title: "PHONE",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "dattakrupajewellers@gmail.com",
      title: "EMAIL",
    },
  ];
  return (
    <form ref={form} onSubmit={sendEmail} className="text-gray-600 body-font relative">
      <div className="max-w-screen mx-auto px-4 py-4 text-gray-600 md:px-8 md:py-12">
        <div className="max-w-full space-y-3">
          {/* <h3 className="text-indigo-600 font-semibold">
                        Contact US
                    </h3> */}
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Let us know how we can help
          </p>
          <p>
            We’re here to help and answer any question you might have, We look
            forward to hearing from you .
          </p>
        </div>
        <div>
          <ul className="mt-12 flex flex-wrap gap-y-6 items-baseline md:justify-evenly sm:gap-x-24">
            {contactMethods.map((item, idx) => (
              <li key={idx} className="md:flex-1">
                <h4 className="text-gray-800 text-lg font-medium">
                  {item.title}
                  <div className="h-[2px] bg-yellow-500 w-6"></div>
                </h4>
                <div className="mt-4 flex items-start gap-x-3">
                  <div className="flex-none text-gray-400">{item.icon}</div>
                  <p>{item.contact}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="w-full lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden mt-10 sm:mr-10 flex items-end order-2 sm:order-1">
          <iframe
            width="100%"
            height="100%"
            className="inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.7905540154425!2d73.8581374748725!3d15.814994084828266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf8d28ace206bf%3A0x800710dc86c4fb7b!2sDATTAKRUPA%20JEWELLERS!5e0!3m2!1sen!2sin!4v1700313465336!5m2!1sen!2sin"
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-10 order-1 sm:order-2">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Contact Us
            <div className="h-1 mt-2 bg-yellow-500 w-12"></div>
          </h1>
          <p className="leading-relaxed mb-5 text-gray-600">
            We’d love to hear from you! Please fill out the form bellow.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
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
              name="reply_to"
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
            Send
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Let us know how we can help.
          </p>
        </div>
      </div>
    </form>
  );
}

export default Contact;
