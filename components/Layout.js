import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

//Componentes
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  // Hook de Routing
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Grou</title>
      </Head>

      {router.pathname === "/" ? (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex justify-center items-center">
          <div>{children}</div>
        </div>
      ) : (
        // <div className="bg-blue-50 min-h-screen">
        //   <div className="md:flex">
        //     <Sidebar />

        //     <main children="md:w-2/3 lg:w-4/5 min-h-screen w-full">
        //       <Navbar />
        //       {children}
        //     </main>
        //   </div>
        // </div>
        <div className="bg-gray-100 min-h-screen">
          <div className="sm:flex min-h-screen">
            <Sidebar />

            <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-0">
              <Navbar />
              {children}
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
