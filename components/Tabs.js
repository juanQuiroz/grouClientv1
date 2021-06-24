import React from "react";
import Tab from "./Tab";
import { useRouter } from "next/router";

const Tabs = () => {
  const router = useRouter();

  if (router.pathname.search("/dashboard") === 0) {
    var tabs = [
      { nombre: "Dashboard Principal", ruta: "/dashboard/dashboard1" },
    ];
  } else if (router.pathname.search("/ventas/crearventas") === 0) {
    var tabs = [
      {
        nombre: "En local",
        ruta: "/ventas/crearventas/enlocal",
      },
      {
        nombre: "Recojo en tienda",
        ruta: "/ventas/crearventas/recojoentienda",
      },
      {
        nombre: "Delivery",
        ruta: "/ventas/crearventas/delivery",
      },
    ];
  } else if (router.pathname.search("/ventas/combos") === 0) {
    var tabs = [
      {
        nombre: "Crear combos",
        ruta: "/ventas/combos/crearcombos",
      },
      {
        nombre: "Mis combos",
        ruta: "/ventas/combos/miscombos",
      },
    ];
  } else if (router.pathname.search("/ventas/barralibre") === 0) {
    var tabs = [
      {
        nombre: "Crear barra libre",
        ruta: "/ventas/barralibre/crearbarralibre",
      },
      {
        nombre: "Mis barras libres",
        ruta: "/ventas/barralibre/misbarraslibres",
      },
    ];
  } else if (router.pathname.search("/almacen/productos") === 0) {
    var tabs = [
      {
        nombre: "Mis productos",
        ruta: "/almacen/productos/misproductos",
      },
      {
        nombre: "Registrar productos",
        ruta: "/almacen/productos/registrarproductos",
      },
    ];
  } else if (router.pathname.search("/almacen/insumos") === 0) {
    var tabs = [
      {
        nombre: "Existencias",
        ruta: "/almacen/insumos/existencias",
      },
      {
        nombre: "Registrar insumos",
        ruta: "/almacen/insumos/registrarinsumos",
      },
      {
        nombre: "Movimientos",
        ruta: "/almacen/insumos/movimientos",
      },
    ];
  } else if (router.pathname.search("/configuracion/usuarios") === 0) {
    var tabs = [
      {
        nombre: "Crear usuarios",
        ruta: "/configuracion/usuarios/crearusuarios",
      },
      {
        nombre: "Editar usuarios",
        ruta: "/configuracion/usuarios/editarusuarios",
      },
    ];
  }

  return (
    <div className="bg-gray-200 m-2 rounded-lg h-9">
      <nav className="flex flex-col sm:flex-row justify-center items-between h-9 ">
        {tabs.map(tab => (
          <Tab nombre={tab.nombre} ruta={tab.ruta} key={tab.ruta} />
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
