import "./App.css";

import logo from "./assets/img/logo.svg";
import tenis1 from "./assets/img/tenis-1-ampliado.png";

import tenis1g from "./assets/img/tenis-1-galeria.png";
import tenis2g from "./assets/img/tenis-2-galeria.png";
import tenis3g from "./assets/img/tenis-3-galeria.png";
import video from "./assets/img/img-video.png";
import arrow from "./assets/img/icon-arrow.svg";

function App() {
    return (
        <div className="container flex w-auto">
            <header>
                <img src={logo} />
                <nav>
                    <ul>
                        <li>
                            <a href="#">HOMEM</a>
                        </li>
                        <li>
                            <a href="#">MULHER</a>
                        </li>
                        <li>
                            <a href="#">CRIANÇA</a>
                        </li>
                        <li>
                            <a href="#">CUSTOMIZAR</a>
                        </li>
                    </ul>
                </nav>
                <div class="input-group">
                    <img src="./assets/img/icon-search.svg" alt="" />
                    <input type="search" placeholder="Pesquisar" />
                </div>
                <img src="./assets/img/icon-bag.svg" alt="" />
            </header>
            <main>
                <div class="left-container">
                    <h1>Tênis Esportivo Para Corrida Top</h1>
                    <p>
                        Esse tênis tem o intuito de te deixar ainda mais
                        fitness, focado, e musculoso.
                    </p>
                    <span>R$ 1.000,00</span>
                    <button>Comprar</button>
                </div>
                <div class="right-container">
                    <div class="right-container-top">
                        <img src={tenis1} alt="" />
                    </div>

                    <div class="right-container-bottom">
                        <img src={tenis1g} alt="" />
                        <img src={tenis2g} alt="" />
                        <img src={tenis3g} alt="" />
                    </div>
                </div>
            </main>
            <footer>
                <img src={video} alt="" />

                <nav>
                    <ul>
                        <li>
                            <a href="#">FACEBOOK</a>
                        </li>
                        <li>
                            <a href="#">INSTAGRAM</a>
                        </li>
                        <li>
                            <a href="#">YOUTUBE</a>
                        </li>
                        <li>
                            <a href="#">TWITTER</a>
                        </li>
                    </ul>
                </nav>
                <div class="footer-black-container">
                    EXPLORE MAIS
                    <img src={arrow} alt="" />
                </div>
            </footer>
        </div>
    );
}

export default App;
