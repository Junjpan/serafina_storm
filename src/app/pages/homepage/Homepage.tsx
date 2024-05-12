import Logo from "../../../assets/Logo.svg";
import Image from "next/image";
import { anton } from "../../font";
import HomeAnimation from "./HomeAnimation";
import Home from "@/app/page";

const HomePage = () => {
  return (
    <main className="landingpage">
      <div className="landingpage__content">
        <h1 className={`landingpage__title ${anton.className}`}>
          Serafina Sims Gallery
        </h1>
        <Image
          src={Logo}
          alt="Storm Sims"
          className="landingpage__image"
          unoptimized
        />

        <button>Enter</button>
      </div>
      <HomeAnimation />
    </main>
  );
};

export default HomePage;
