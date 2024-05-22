import React from 'react';

class LocalNewsPage extends React.Component {
  render() {
    return (
      <div>
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
        <nav className="main-navigation">
         <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/ofk">ÖFK</a></li>
            <li><a href="/local-news">Local News</a></li>
            <li><a href="/predictions">Predictions</a></li>
          </ul>
        </nav>
        <div className="clearfix">
          <div className="main-content">
            <div className="news-box">
              <h2>Latest News</h2>
              <a href="#article2" className="article-box">
                <article>
                  <img src={require("./boll.png")} alt="Sidebar Image" />
                  <h3>TRÄNINGSMATCH HERR</h3>
                  <div className="article-content" id="article2">
                    <p>Träningsmatcher Herr JHFF
                      Frösö IF - IFK Östersund
                      18:15, 4 feb. 2024
                      ÖP-hallen</p>
                  </div>
                </article>
              </a>
            </div>
          </div>
          <div className="sidebar">
            <div className="klubbar">
              <p>Klubbar</p>
            </div>
            <h3>Division 2 - Herrar</h3>
            <div className="sidebar-item">
              <img src={require("./764.png")} alt="Sidebar Image" />
              <a href="https://www.svenskfotboll.se/serier-cuper/tabell-och-resultat/div-2-norrland-herr-2024/115348/">IFK Östersund</a>
            </div>
            <h3>Division 1 - Damer</h3>
            <div className="sidebar-item">
              <img src={require("./ope.png.cropped.png")} alt="Sidebar Image" />
              <a href="https://www.svenskfotboll.se/serier-cuper/tabell-och-resultat/division-2-dam-mellersta-norrland/115527/">Ope IF</a>
            </div>
            <h3>Divison 4 - Herrar</h3>
            <div className="sidebar-item">
              <img src={require("./ifkstromsund.png")} alt="Sidebar Image" />
              <a href="https://www.svenskfotboll.se/serier-cuper/tabell-och-resultat/div-5-herr-norra/116546/">IFK Strömsund</a>
            </div>
          </div>
        </div>
        <footer>
          <p>Skapad av: Mohammed | © 2024</p>
        </footer>
      </div>
    );
  }
}

export default LocalNewsPage;
