import Logo from "../../../assets/Logo.svg";
import Image from "next/image";
import HomeAnimation from "./HomeAnimation";
import Button from "@/components/Button/Button";
import Home from "@/app/page";

const HomePage = () => {
  return (
    <main className="landingpage">
      <div className="landingpage__content">
        {/* <h1 className={`landingpage__title`}>Serafina Gallery</h1> */}
        <Image
          src={Logo}
          alt="Storm Sims"
          className="landingpage__image"
          unoptimized
        />
        <Button label="Enter Gallery" variant="elevated" />
      </div>
      <HomeAnimation />
    </main>
  );
};

export default HomePage;
