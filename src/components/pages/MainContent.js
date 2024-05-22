// MainContent.js

import React from 'react';

const MainContent = () => {
  return (
    <div className="main-content">
    <div className="news-box">
      <h2>Latest News</h2>
      <a href="#article1" className="article-box">
        <article>
          <img src={require("./ofk-weblogo-custom.png")} alt="Sidebar Image" />
          <h3>DET SER BRA UT INFÖR SÄSONGEN FÖR ÖFK - ALLA SPELARE ÄR FRISKA</h3>
          <div className="article-content" id="article1">
            Det känns bra att alla spelare i ÖFK är skadefria och kan deltaga på träningslägret i Alicante.
          </div>
        </article>
      </a>
      </div>
  
    </div>
  );
};

export default MainContent;
