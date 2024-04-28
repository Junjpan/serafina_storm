import Logo from "../../../assets/Logo.svg";
import Image from "next/image";
import { pacifico } from "../../font";

const HomePage = () => {
  return (
    <main className="landingpage">
      <div className="landingpage__content">
        <h1 className={`landingpage__title ${pacifico.className}`}>
          STORM GALLERY WALK
        </h1>
        <Image src={Logo} alt="Storm Sims" className="landingpage__image" />

        <button>Enter</button>
      </div>
    </main>
  );
};

export default HomePage;
