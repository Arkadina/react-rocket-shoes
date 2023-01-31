import "./App.css";

import logo from "./assets/img/logo.svg";
import tenis1 from "./assets/img/tenis-1-ampliado.png";

import tenis1g from "./assets/img/tenis-1-galeria.png";
import tenis2g from "./assets/img/tenis-2-galeria.png";
import tenis3g from "./assets/img/tenis-3-galeria.png";
import video from "./assets/img/img-video.png";
import arrow from "./assets/img/icon-arrow.svg";
import bag from "./assets/img/icon-bag.svg";

function App() {
    return (
        <div className=" flex flex-col min-h-screen ">
            <header className="flex absolute justify-between w-full">
                <img src={logo} />
                <nav>
                    <ul>
                        <li className="inline-block ">
                            <a href="#">HOMEM</a>
                        </li>
                        <li className="inline-block">
                            <a href="#">MULHER</a>
                        </li>
                        <li className="inline-block">
                            <a href="#">CRIANÇA</a>
                        </li>
                        <li className="inline-block">
                            <a href="#">CUSTOMIZAR</a>
                        </li>
                    </ul>
                </nav>
                <div class="input-group">
                    <img src="./assets/img/icon-search.svg" alt="" />
                    <input type="search" placeholder="Pesquisar" />
                </div>
                <img src={bag} alt="" />
            </header>
            <main class="flex flex-row">
                <div class="bg-background w-1.5">
                    <h1 className="text-6xl font-bold">
                        Tênis Esportivo Para Corrida Top
                    </h1>
                    <p>
                        Esse tênis tem o intuito de te deixar ainda mais
                        fitness, focado, e musculoso.
                    </p>
                    <span>R$ 1.000,00</span>
                    <button className="bg-button text-white">Comprar</button>
                </div>
                <div class="bg-mainBackground">
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
            <footer className="flex flex-row justify-between">
                <img src={video} alt="" />

                <nav>
                    <ul>
                        <li className="inline-block">
                            <a href="#">FACEBOOK</a>
                        </li>
                        <li className="inline-block">
                            <a href="#">INSTAGRAM</a>
                        </li>
                        <li className="inline-block">
                            <a href="#">YOUTUBE</a>
                        </li>
                        <li className="inline-block">
                            <a href="#">TWITTER</a>
                        </li>
                    </ul>
                </nav>
                <div class="flex justify-center align-middle">
                    EXPLORE MAIS
                    <img src={arrow} alt="" />
                </div>
            </footer>
        </div>
    );
}

export default App;
