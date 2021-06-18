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
            <Sidebar />

            <main children="md:w-2/3 lg:w-4/5 sm:min-h-screen">{children}</main>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
