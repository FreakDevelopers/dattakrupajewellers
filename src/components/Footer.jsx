import React from "react";

function Footer() {
  return (
    <footer className="text-gray-600 leading-10 dark:text-gray-400 body-font bg-gray-900">
      <div className="container px-20 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-100 dark:text-gray-300">
            <img
              src={"https://ik.imagekit.io/dj/dj/logo/logo.png?updatedAt=1701258840163"}
              className="w-10 h-10 text-white rounded-full"
              alt="Logo"
            />
            <span className="ml-2 text-xl">Dattakrupa Jewellers</span>
          </a>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quo soluta illum, laudantium velit aliquid nisi tempora odio quam
            veritatis. Laborum officia atque sint dicta ratione enim cumque
            incidunt obcaecati.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* Categories Section 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 pt-2">
            <h2 className="title-font font-medium text-gray-100 dark:text-gray-300 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          {/* Categories Section 2, 3, 4 (Similar structure) */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 pt-2">
            <h2 className="title-font font-medium text-gray-100 dark:text-gray-300 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 pt-2">
            <h2 className="title-font font-medium text-gray-100 dark:text-gray-300 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 pt-2">
            <h2 className="title-font font-medium text-gray-100 dark:text-gray-300 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-gray-100 dark:text-gray-300 hover:text-gray-200 dark:hover:text-gray-400">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          {/* ... */}
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="bg-gray-700 dark:bg-gray-800">
        <div className="container mx-auto py-4 px-20 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center sm:text-left">
            © 2020 Dattakrupa Jewellers. Designed &amp; Developed by
            <a
              href="http://freakdevelopers.com/"
              rel="noopener noreferrer"
              className="text-gray-100 dark:text-gray-300 ml-1"
              target="_blank"
            >
              FreakDevs.
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {/* Social Media Icons (Add your links or replace with your social media icons) */}
            <a className="text-gray-100 dark:text-gray-300">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                {/* Twitter Icon */}
              </svg>
            </a>
            {/* Add other social media icons here */}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
