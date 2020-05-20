import React from "react";

let currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright © Skylor Parker {currentYear}</p>
    </footer>
  );
}

export default Footer;
