import React from "react";
import { useRouter } from "next/router";

import Pestaña from "./Pestaña";

const Navbar = () => {
  const router = useRouter();

  // nombre -> Nombre que se va a mostrar
  // ruta -> ruta de la pestaña(para que abarque todas las subrutas)
  // ruta -> ruta por defecto a la que apunta a la pestaña (href)
  if (router.pathname.search("/dashboard") === 0) {
    var pestañas = [
      { nombre: "Dashboard Principal", ruta: "/dashboard/dashboard1" },
    ];
  } else if (router.pathname.search("/ventas") === 0) {
    var pestañas = [
      {
        nombre: "Crear ventas",
        ruta: "/ventas/crearventas",
        rutaIndex: "/ventas/crearventas/enlocal",
      },
      { nombre: "ventas", ruta: "/ventas/ventas", rutaIndex: "/ventas/ventas" },
      {
        nombre: "Combos",
        ruta: "/ventas/combos",
        rutaIndex: "/ventas/combos/crearcombos",
      },
      {
        nombre: "Barra libre",
        ruta: "/ventas/barralibre",
        rutaIndex: "/ventas/barralibre/crearbarralibre",
      },
    ];
  } else if (router.pathname.search("/almacen") === 0) {
    var pestañas = [
      {
        nombre: "Productos",
        ruta: "/almacen/productos",
        rutaIndex: "/almacen/productos/misproductos",
      },
      {
        nombre: "Insumos",
        ruta: "/almacen/insumos",
        rutaIndex: "/almacen/insumos/existencias",
      },

      {
        nombre: "Proveedores",
        ruta: "/almacen/proveedores",
        rutaIndex: "/almacen/proveedores",
      },
    ];
  } else if (router.pathname.search("/caja") === 0) {
    var pestañas = [
      {
        nombre: "Ingresos",
        ruta: "/caja/ingresos",
        rutaIndex: "/caja/ingresos/cobrar",
      },
      { nombre: "Egresos", ruta: "/caja/egresos", rutaIndex: "/caja/egresos" },
      {
        nombre: "Créditos",
        ruta: "/caja/creditos",
        rutaIndex: "/caja/creditos",
      },
      {
        nombre: "Apertura / Cierre",
        ruta: "/caja/aperturacierre",
        rutaIndex: "/caja/aperturacierre",
      },
    ];
  } else if (router.pathname.search("/administracion") === 0) {
    var pestañas = [
      { nombre: "Administración", ruta: "/administracion/administracion" },
    ];
  } else if (router.pathname.search("/configuracion") === 0) {
    var pestañas = [
      {
        nombre: "Usuarios",
        ruta: "/configuracion/usuarios/",
        rutaIndex: "/configuracion/usuarios/crearUsuarios",
      },
    ];
  }

  return (
    <nav className="flex justify-start list-none px-2 md:w-full lg:w-full bg-gray-200 p-1">
      {pestañas.map(pestaña => (
        <Pestaña
          nombre={pestaña.nombre}
          ruta={pestaña.ruta}
          key={pestaña.ruta}
          rutaIndex={pestaña.rutaIndex}
        />
      ))}
    </nav>
  );
};

export default Navbar;
