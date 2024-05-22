// Header.js

import React from 'react';

const Header = () => {
  return (
    <header>
    <div className="boll-image">
      <img src={require("./soccer-ball-png.png")} alt="boll-image" height="100" width="100" />
      <img src={require("./soccer-ball-png.png")} alt="boll-image" height="80" width="70" />
      <img src={require("./soccer-ball-png.png")} alt="boll-image" height="60" width="50" />
    </div>
    <div className="logo-container">
      <a href="index.html">
        <h1>FotbollZ</h1>
        <img src={require("./fotbollz.png")} alt="FotbollZ Logo" />
      </a>
    </div>
  </header>
  );
};

export default Header;
