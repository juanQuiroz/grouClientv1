import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Usercircle from "../assets/icons/userCircle.svg";
import Map from "../assets/icons/map.svg";
import Almacen from "../assets/icons/home.svg";
import Ventas from "../assets/icons/shopping-bag.svg";
import Dashboard from "../assets/icons/apps.svg";
import Caja from "../assets/icons/cash-register.svg";
import Administracion from "../assets/icons/user-admin.svg";
import CerrarSesion from "../assets/icons/logout.svg";
import Configuracion from "../assets/icons/settings.svg";

const Sidebar = () => {
  // Routing de nextjs
  const router = useRouter();
  console.log(router);
  const res = router.pathname.search("/dashboard");
  console.log(res);

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <aside className=" bg-white sm:w-full md:w-1/3 lg:w-1/5 min-h-screen shadow-md">
      <div className="px-4">
        <div className="bg-gradient-to-br from-blue-200 to-indigo-300 rounded-b-lg shadow-lg h-24">
          <div className="flex items-center justify-center p-4">
            <Map className="w-12 mr-2" />
            <div>
              <h2 className="text-gray-900 text-3xl font-bold">Oishi</h2>
              <h3 className="text-gray-700 text-xl font-normal -mt-2">
                SB Cañete
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center md:justify-start mt-10 p-4">
        <Usercircle className="w-9 mr-2" />
        <div>
          <h2 className="text-gray-800 text-xl font">Hector Benavente</h2>
          <h3 className="text-gray-700 text-lg font-thin -mt-2">
            Super Administrador
          </h3>
        </div>
      </div>

      <nav className="mt-5 list-none py-4 px-4">
        <li
          className={
            router.pathname.search("/dashboard") === 0
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-l-4 border-red-600 my-1"
              : "p-2 my-1"
          }
        >
          <div className="flex flex-wrap items-center justify-center sm:justify-start ">
            <Dashboard className="w-6" />
            <Link href="/dashboard/dashboard1">
              <a className="text-black block ml-2">Dashboard</a>
            </Link>
          </div>
        </li>

        <li
          className={
            router.pathname.search("/ventas") === 0
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-l-4 border-red-600 my-1"
              : "p-2 my-1"
          }
        >
          <div className="flex flex-wrap items-center justify-center sm:justify-start ">
            <Ventas className="w-6" />
            <Link href="/ventas">
              <a className="text-black block ml-2">Ventas</a>
            </Link>
          </div>
        </li>

        <li
          className={
            router.pathname.search("/almacen") === 0
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-l-4 border-red-600 my-1"
              : "p-2 my-1"
          }
        >
          <div className="flex flex-wrap items-center justify-center sm:justify-start ">
            <Almacen className="w-6" />
            <Link href="/almacen">
              <a className="text-black block ml-2">Almacen</a>
            </Link>
          </div>
        </li>

        <li
          className={
            router.pathname.search("/caja") === 0
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-l-4 border-red-600 my-1"
              : "p-2 my-1"
          }
        >
          <div className="flex flex-wrap items-center justify-center sm:justify-start ">
            <Caja className="w-6" />
            <Link href="/caja">
              <a className="text-black block ml-2">Caja</a>
            </Link>
          </div>
        </li>

        <li
          className={
            router.pathname.search("/administracion") === 0
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-l-4 border-red-600 my-1"
              : "p-2 my-1"
          }
        >
          <div className="flex flex-wrap items-center justify-center sm:justify-start ">
            <Administracion className="w-6" />
            <Link href="/administracion">
              <a className="text-black block ml-2">Admnistración</a>
            </Link>
          </div>
        </li>
      </nav>

      <div className="w-full mt-24 flex justify-between">
        <div className="cursor-pointer flex  flex-wrap items-center content-start bg-gradient-to-r from-blue-200 to-indigo-300 rounded-r-lg shadow-lg py-1 px-4">
          <button type="button" onClick={() => cerrarSesion()}>
            <h3 className="text-gray-900 text-lg">Cerrar</h3>
            <h3 className="-mt-2 text-gray-900 text-lg">Sesión</h3>
          </button>
          <a>
            <CerrarSesion className="w-8 ml-3" />
          </a>
        </div>
        <Link href="/configuracion/crearusuarios">
          <a className="flex items-center">
            <Configuracion className="w-8 ml-12 cursor-pointer mr-8" />
          </a>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
