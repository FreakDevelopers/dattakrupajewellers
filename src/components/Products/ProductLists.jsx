import React from "react";

function ProductLists() {
  const products = [
    {
      id: 1,
      name: "Golden Ring",
      category: "Men Ring",
      price: 1400,
      path:"src/assets/img/jewellery/rings/r-1.jpg"
    },
    {
      id: 2,
      name: "Golden Ring",
      category: "Women Ring",
      price: 1400,
      path:"src/assets/img/jewellery/rings/r-1.jpg"
    },
    {
      id: 3,
      name: "Silver Neckles",
      category: "Neckles",
      price: 1400,
      path:"src/assets/img/jewellery/rings/r-1.jpg"
    },
    {
      id: 4,
      name: "Golden Bangles",
      category: "Men Bangles",
      price: 1400,
      path:"src/assets/img/jewellery/rings/r-1.jpg"
    },
    {
      id: 5,
      name: "Golden Ring",
      category: "Ear Rings",
      price: 1400,
      path:"src/assets/img/jewellery/rings/r-1.jpg"
    },
    {
      id: 6,
      name: "Golden Ring",
      category: "Men Ring",
      price: 1400,
      path:"src/assets/img/jewellery/rings/r-1.jpg"
    },
    {
      id: 7,
      name: "Golden Ring",
      category: "Men Ring",
      price: 1400,
      path:"src/assets/img/jewellery/rings/r-1.jpg"
    },
    {
      id: 8,
      name: "Golden Neckles",
      category: "Neckles",
      price: 1400,
      path:"src/assets/img/jewellery/rings/r-1.jpg"
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container py-5 mx-auto">
        <h1 className="font-bold text-3xl p-4 text-black"><span className="text-orange-700">New </span> Arrivings</h1>
        <div className="w-12 h-1 ml-4 bg-yellow-500"></div>
        <div className="flex flex-wrap my-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
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
