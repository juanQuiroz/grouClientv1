import React from "react";
import Layout from "../components/Layout";

const Configuracion = () => {
  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-800 text-light m-10">
          Configuracion
        </h1>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div class="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/img/store.jpg"
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Case study
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Finding customers for your new business
              </a>
              <p className="mt-2 text-gray-500">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Configuracion;
