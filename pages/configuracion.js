import React from "react";
import Layout from "../components/Layout";

import Image from "next/image";

const Configuracion = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <Layout>
        <h1>CONFIURACION</h1>
      </Layout>
    </>
  );
};

export default Configuracion;
