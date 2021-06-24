import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Tab = ({ nombre, ruta }) => {
  const router = useRouter();
  return (
    <button
      className={
        router.pathname.search(`${ruta}`) === 0
          ? "shadow text-gray-900 font-bold m-1 flex-grow bg-gray-100 rounded-lg  px-3 focus:outline-none"
          : " text-gray-900 font m-1 flex-grow bg-gray-200 rounded-lg  px-3 focus:outline-none"
      }
    >
      <Link href={`${ruta}`}>
        <a className="text-gray-600 block font-medium">{nombre}</a>
      </Link>
    </button>
  );
};

export default Tab;
