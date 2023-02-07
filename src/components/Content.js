import React from "react";
import Days from "./Days";
import Cities from "./Cities";
import Footer from "./Footer";

// Burası bizim main kısmımız.

function Content() {
  return (
    <div>
      <Cities className="container"></Cities>
      <Days />
      <Footer />
    </div>
  );
}

export default Content;
