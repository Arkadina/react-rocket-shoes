import "./App.css";

import logo from "./assets/img/logo.svg";
import tenis1 from "./assets/img/tenis-1-ampliado.png";

import tenis1g from "./assets/img/tenis-1-galeria.png";
import tenis2g from "./assets/img/tenis-2-galeria.png";
import tenis3g from "./assets/img/tenis-3-galeria.png";
import video from "./assets/img/img-video.png";
import arrow from "./assets/img/icon-arrow.svg";
import bag from "./assets/img/icon-bag.svg";
import search from "./assets/img/icon-search.svg";

function App() {
    return (
        <div className="flex flex-col min-h-screen ">
            <header className="flex absolute items-center justify-between w-full px-[60px] py-[40px] h-[100px]">
                <img src={logo} />
                <nav>
                    <ul>
                        <li className="inline-block ">
                            <a
                                href="#"
                                className="font-bold mr-[90px] hover:text-[14px] ease-linear duration-300"
                            >
                                HOMEM
                            </a>
                        </li>
                        <li className="inline-block">
                            <a
                                href="#"
                                className="font-bold mr-[90px] hover:text-[14px] ease-linear duration-300"
                            >
                                MULHER
                            </a>
                        </li>
                        <li className="inline-block">
                            <a
                                href="#"
                                className="font-bold mr-[90px] hover:text-[14px] ease-linear duration-300"
                            >
                                CRIANÇA
                            </a>
                        </li>
                        <li className="inline-block">
                            <a
                                href="#"
                                className="font-bold mr-[90px] hover:text-[14px] ease-linear duration-300"
                            >
                                CUSTOMIZAR
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex">
                    <img
                        src={search}
                        alt=""
                        className="relative top-[1px] left-[33px] cursor-pointer"
                    />
                    <input
                        type="search"
                        className="placeholder:font-bold border-none outline-none py-[5.75px] pr-[60px] pl-[40px] placeholder:text-[14px] text-textDescription"
                        placeholder="Pesquisar"
                    />
                </div>
                <img src={bag} alt="" />
            </header>
            <main className="flex flex-row ">
                <div className="bg-background w-[37.5%] pt-[100px] flex flex-col px-[80px]">
                    <h1 className="text-6xl font-bold leading-[72px]">
                        Tênis Esportivo Para Corrida Top
                    </h1>
                    <p className="text-textDescription leading-[19px] text-[16px] font-normal my-[21px]">
                        Esse tênis tem o intuito de te deixar ainda mais
                        fitness, focado, e musculoso.
                    </p>
                    <span className="font-bold text-[40px] leading-[47px] text-black">
                        R$ 1.000,00
                    </span>
                    <button className="bg-button text-white mt-[30px] w-[183px] h-[82px] uppercase text-[13px] hover:opacity-90">
                        Comprar
                    </button>
                </div>
                <div className="bg-mainBackground w-full pt-[100px]  flex flex-col items-center pb-[20px]">
                    <div>
                        <img src={tenis1} alt="" className="py-[10px]" />
                    </div>

                    <div className="flex flex-row justify-between mx-[20px] pb-[10px]">
                        <img src={tenis1g} alt="" className="mx-[20px]" />
                        <img
                            src={tenis2g}
                            alt=""
                            className="mx-[20px] border-b-[5px] border-red-600"
                        />
                        <img src={tenis3g} alt="" className="mx-[20px]" />
                    </div>
                </div>
            </main>
            <footer className="flex flex-row justify-between bg-background">
                <img src={video} alt="" />

                <nav className="flex justify-between items-center">
                    <ul>
                        <li className="inline-block">
                            <a
                                href="#"
                                className="font-bold mr-[40px] hover:text-[14px] ease-linear duration-300"
                            >
                                FACEBOOK
                            </a>
                        </li>
                        <li className="inline-block">
                            <a
                                href="#"
                                className="font-bold mr-[40px] hover:text-[14px] ease-linear duration-300"
                            >
                                INSTAGRAM
                            </a>
                        </li>
                        <li className="inline-block">
                            <a
                                href="#"
                                className="font-bold mr-[40px] hover:text-[14px] ease-linear duration-300"
                            >
                                YOUTUBE
                            </a>
                        </li>
                        <li className="inline-block">
                            <a
                                href="#"
                                className="font-bold mr-[40px] hover:text-[14px] ease-linear duration-300"
                            >
                                TWITTER
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-center items-center bg-black text-white w-[300px]">
                    EXPLORE MAIS
                    <img src={arrow} alt="" />
                </div>
            </footer>
        </div>
    );
}

export default App;
