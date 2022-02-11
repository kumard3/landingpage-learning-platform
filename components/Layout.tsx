import React from "react";
import Footer from "./Footer";
import NavComponent from "./NavComponent";

export default function Layout({ children }: any) {
  return (
    <div className="bg-black text-white">
      <NavComponent />
      <main className="my-10  ">{children}</main>
      <Footer />
    </div>
  );
}
