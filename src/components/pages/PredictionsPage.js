import React from 'react';

class PredictionsPage extends React.Component {
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
                  <img src={require("./pre.jpg")} alt="Sidebar Image" />
                  <h3>TIPS OCH RESULTAT DIV 2 NORRLAND</h3>
                  <div className="article-content" id="article2">
                    <h4>Älgarna-Härnösand IF -Ytterhogdals IK 2-3</h4>
                    <p>
                      Älgarna-Härnösand IF -Ytterhogdals IK 2-3
                      14:00, 27 aug 2022
                      Ängevallen
                      Älgarna-Härnösand och Ytterhogdal har samlat ihop lika många poäng hittills i serien, även om jag tycker att Ytterhogdal har bättre dagsform. Det kommer att bli en jämn match och hemmaplan är en fördel. Vi tror ändå på kryss.
                    </p>
                    <p>
                      Tips 2-2
                    </p>
                    <h4>IFK Östersund - Umeå FC A 4-0</h4>
                    <p>
                      IFK Östersund - Umeå FC A 4-0
                      16:00, 27 aug 2022
                      Jämtkraft Arena
                      
                      En av omgångens säkraste IFK- vinster. Senast förlorade Umeå stort hemma mot Sandvik som inte är något märkvärdigt lag. På bortaplan är Umeå sämre.
                    </p>

                    <p>
                      Tips 4-1
                    </p>
                  </div>
                </article>
              </a>
            </div>
          </div>
          <div className="sidebar">
            <div className="klubbar">
              <p>Klubbar</p>
            </div>
            <h3>Superettan</h3>
            <div className="sidebar-item">
              <img src={require("./ofk-weblogo-custom.png")} alt="Sidebar Image" />
              <a href="https://superettan.se/">Östersund FK</a>
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

export default PredictionsPage;
