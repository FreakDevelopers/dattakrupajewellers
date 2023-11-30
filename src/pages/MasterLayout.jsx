import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MasterLayout() {
  return (
    <>
      <Navbar />
      <div className="md:px-20 px-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MasterLayout;
