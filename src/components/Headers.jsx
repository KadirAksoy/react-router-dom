import React from "react";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <div className="header">
      <Link className="link" to="/">
        Anasayfa
      </Link>
      <Link className="link" to="/about">
        Hakkımızda
      </Link>
      <Link className="link" to="/contact">
        İletişim
      </Link>
      <Link className="link" to="/product">
        Ürünlerimiz
      </Link>
    </div>
  );
}

export default Headers;
