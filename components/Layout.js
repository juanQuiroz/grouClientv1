import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

//Componentes
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  // Hook de Routing
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Grou</title>
      </Head>

      {router.pathname === "/login" ? (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex justify-center items-center">
          <div>{children}</div>
        </div>
      ) : (
        <div className="bg-blue-50 min-h-screen">
          <div className="md:flex">
            {/* <Sidebar /> */}

            <div className="relative bg-white dark:bg-gray-800">
              <div className="flex flex-col sm:flex-row sm:justify-around">
                <div className="w-72 h-screen">
                  <nav className="mt-10 px-6 ">
                    <a
                      className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                      href="#"
                    >
                      <span class="mx-4 text-lg font-normal">Element</span>
                      <span className="flex-grow text-right"></span>
                    </a>
                    <a
                      className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      href="#"
                    >
                      <span className="mx-4 text-lg font-normal">Form</span>
                      <span className="flex-grow text-right"></span>
                    </a>
                    <a
                      className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                      href="#"
                    >
                      <span className="mx-4 text-lg font-normal">Commerce</span>
                      <span className="flex-grow text-right"></span>
                    </a>
                    <a
                      className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                      href="#"
                    >
                      <span className="mx-4 text-lg font-normal">
                        Navigation
                      </span>
                      <span className="flex-grow text-right"></span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            <main children="md:w-2/3 lg:w-4/5 sm:min-h-screen">{children}</main>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
