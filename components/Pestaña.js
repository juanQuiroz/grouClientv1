import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Pestaña = ({ nombre, ruta, rutaIndex }) => {
  const router = useRouter();
  console.log(ruta);
  console.log(router);
  return (
    <li
      className={
        router.pathname.search(`${ruta}`) === 0
          ? "mr-5 bg-gray-100 p-2 rounded shadow-lg border-b-4 border-red-600"
          : "p-2 mr-5"
      }
    >
      <div className="flex flex-wrap items-center justify-center sm:justify-start ">
        <Link href={`${rutaIndex}`}>
          <a className="text-gray-600 block font-medium">{nombre}</a>
        </Link>
      </div>
    </li>
  );
};

export default Pestaña;
