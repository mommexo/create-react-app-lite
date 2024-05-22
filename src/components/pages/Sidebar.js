// Sidebar.js

import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="klubbar">
        <p>Klubbar</p>
      </div>
      <h3>Superettan</h3>
      <div className="sidebar-item">
              <img src={require("./ofk-weblogo-custom.png")} alt="Sidebar Image" />
              <a href="https://superettan.se/">Östersund FK</a>
      </div>
    </div>
  );
};

export default Sidebar;
