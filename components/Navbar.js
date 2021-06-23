import React from "react";
import { useRouter } from "next/router";

import Pestaña from "./Pestaña";

const Navbar = () => {
  const router = useRouter();

  if (router.pathname.search("/dashboard") === 0) {
    var pestañas = [
      { nombre: "Dashboard Principal", ruta: "/dashboard/dashboard1" },
    ];
  } else if (router.pathname.search("/ventas") === 0) {
    var pestañas = [
      { nombre: "Crear ventas", ruta: "/ventas/crearventas" },
      { nombre: "ventas", ruta: "/ventas/ventas" },
      { nombre: "Combos", ruta: "/ventas/combos" },
      { nombre: "Barra libre", ruta: "/ventas/barralibre" },
    ];
  } else if (router.pathname.search("/almacen") === 0) {
    var pestañas = [
      { nombre: "Insumos", ruta: "/almacen/insumos" },
      { nombre: "Productos", ruta: "/almacen/productos" },
      { nombre: "Proveedores", ruta: "/almacen/proveedores" },
    ];
  } else if (router.pathname.search("/caja") === 0) {
    var pestañas = [
      { nombre: "Ingresos", ruta: "/caja/ingresos" },
      { nombre: "Egresos", ruta: "/caja/egresos" },
      { nombre: "Créditos", ruta: "/caja/creditos" },
      { nombre: "Apertura / Cierre", ruta: "/caja/aperturacierre" },
    ];
  } else if (router.pathname.search("/administracion") === 0) {
    var pestañas = [
      { nombre: "Administración", ruta: "/administracion/administracion" },
    ];
  } else if (router.pathname.search("/configuracion") === 0) {
    var pestañas = [{ nombre: "Usuarios", ruta: "/configuracion/usuarios" }];
  }

  router.pathname.search("/dashboard") === 0;
  return (
    <nav className="flex justify-start list-none px-2 md:w-full lg:w-full bg-gray-200 p-1">
      {pestañas.map(pestaña => (
        <Pestaña nombre={pestaña.nombre} ruta={pestaña.ruta} key={pestaña.ruta}/>
      ))}
    </nav>
  );
};

export default Navbar;
