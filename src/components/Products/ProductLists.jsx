import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/data";

function ProductLists() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-5 mx-auto">
        <h1 className="font-bold text-3xl px-4 py-2 text-black text-center">
          <span className="text-orange-700">New </span> Arrivings
        </h1>
        <div className="w-12 h-1 mx-auto bg-yellow-500"></div>
        <div className="mt-4 grid md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="p-4 w-full rounded hover:shadow-[0px_0px_15px_0px_rgba(234,_179,_8,_1)] border-2 border-transparent hover:border-2 border-spacing-8"
            >
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block transition-all ease-linear duration-300 hover:scale-110"
                  src={product.path}
                />
              </div>
              <div className="mt-2">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p className="mt-1">₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductLists;
