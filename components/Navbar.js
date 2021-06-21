import React from "react";

import Pestaña from "./Pestaña";

const Navbar = () => {
  return (
    <nav className="flex justify-start list-none px-2 md:w-full lg:w-full bg-gray-200 p-1">
      <Pestaña nombre="Dashboard 1" />
    </nav>
  );
};

export default Navbar;
