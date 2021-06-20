import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-start list-none py-0 px-3 md:w-full lg:w-full bg-gray-200">
      <li
        className={
          router.pathname === "/"
            ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-b-4 border-red-600 my-1"
            : "p-2 my-1"
        }
      >
        <div className="flex flex-wrap items-center justify-center sm:justify-start ">
          <Link href="/">
            <a className="text-black block">Ventas</a>
          </Link>
        </div>
      </li>

      <li
        className={
          router.pathname === "/almacen"
            ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-l-4 border-red-600 my-1"
            : "p-2 my-1"
        }
      >
        <div className="flex flex-wrap items-center justify-center sm:justify-start ">
          <Link href="/almacen">
            <a className="text-black block ml-2">Almacen</a>
          </Link>
        </div>
      </li>

      <li
        className={
          router.pathname === "/caja"
            ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-l-4 border-red-600 my-1"
            : "p-2 my-1"
        }
      >
        <div className="flex flex-wrap items-center justify-center sm:justify-start ">
          <Link href="/caja">
            <a className="text-black block ml-2">Caja</a>
          </Link>
        </div>
      </li>

      <li
        className={
          router.pathname === "/administracion"
            ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-l-4 border-red-600 my-1"
            : "p-2 my-1"
        }
      >
        <div className="flex flex-wrap items-center justify-center sm:justify-start ">
          <Link href="/administracion">
            <a className="text-black block ml-2">Admnistración</a>
          </Link>
        </div>
      </li>
    </nav>
  );
};

export default Navbar;
