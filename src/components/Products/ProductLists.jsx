import React from "react";

function ProductLists() {
  const products = [
    {
      id: 1,
      name: "Golden Ring",
      category: "Men Ring",
      price: 1400,
      path: "https://ik.imagekit.io/dj/dj/jewellery/rings/r-37.jpg?updatedAt=1701258927203",
    },
    {
      id: 2,
      name: "Golden Ring",
      category: "Women Ring",
      price: 1400,
      path: "https://ik.imagekit.io/dj/dj/jewellery/rings/r-98.jpg?updatedAt=1701258943841",
    },
    {
      id: 3,
      name: "Silver Neckles",
      category: "Neckles",
      price: 1400,
      path: "https://ik.imagekit.io/dj/dj/jewellery/rings/r-96.jpg?updatedAt=1701258943654",
    },
    {
      id: 4,
      name: "Golden Ring",
      category: "Men Ring",
      price: 1400,
      path: "https://ik.imagekit.io/dj/dj/jewellery/rings/r-35.jpg?updatedAt=1701258926911",
    },
    {
      id: 5,
      name: "Golden Ring",
      category: "Women Ring",
      price: 1400,
      path: "https://ik.imagekit.io/dj/dj/jewellery/rings/r-99.jpg?updatedAt=1701258943920",
    },
    {
      id: 6,
      name: "Silver Ring",
      category: "Women Ring",
      price: 1400,
      path: "https://ik.imagekit.io/dj/dj/jewellery/rings/r-61.jpg?updatedAt=1701258932588",
    },
    {
      id: 7,
      name: "Golden Earring",
      category: "Earring",
      price: 1400,
      path: "https://ik.imagekit.io/dj/dj/jewellery/earring/JE/je-3.jpg?updatedAt=1701258983769",
    },
    {
      id: 8,
      name: "Silver Earring",
      category: "Earring",
      price: 1400,
      path: "https://ik.imagekit.io/dj/dj/jewellery/earring/SE/se-1.jpg?updatedAt=1701258976761",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container py-5 mx-auto">
        <h1 className="font-bold text-3xl p-4 text-black">
          <span className="text-orange-700">New </span> Arrivings
        </h1>
        <div className="w-12 h-1 ml-4 bg-yellow-500"></div>
        <div className="flex flex-wrap my-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full rounded hover:shadow-[0px_0px_15px_0px_rgba(234,_179,_8,_1)] border-2 border-transparent hover:border-2 border-spacing-8">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block transition-all ease-linear duration-300 hover:scale-110"
                  src={product.path}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p className="mt-1">₹{product.price}</p>
              </div>
            </div>
          ))}

          {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/421x261"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p className="mt-1">$21.15</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/422x262"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$12.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p className="mt-1">$18.40</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/424x264"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/425x265"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p className="mt-1">$21.15</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/427x267"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$12.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/428x268"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p className="mt-1">$18.40</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default ProductLists;
