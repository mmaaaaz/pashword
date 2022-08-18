import { Section1, Section2, Section3 } from "@components/Sections";
import type { NextPage } from "next";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Illustration from "../components/Illustration";
import PASSWORD_LENGTH from "../constants/passwordLength";

const Home: NextPage = () => {
  const [passwordLength, setPasswordLength] = useState(PASSWORD_LENGTH.LARGE);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main
      className={`max-w-8xl relative mx-auto flex flex-col items-center overflow-x-hidden ${
        // showMenu && " h-screen overflow-y-hidden"
        ""
      }`}
    >
      {/* MENU BUTTON */}
      {/* <button
        className="absolute top-2 right-2 z-10 cursor-pointer text-3xl text-white/80"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <AiOutlineLeftCircle />
      </button> */}

      {/* <div className="relative">
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div> */}

      {/* SECTIONS */}
      <HeroSection
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
      />

      <Section1 />

      <Section2 />

      <Illustration
        className="mx-auto px-5 pt-10 pb-10 md:px-20 lg:w-1/2 lg:px-0"
        source="/with-without-pashword.png"
        sectionId="with-without-pashword"
      />

      <Section3 />

      <Illustration
        className="mt-20 mb-20 md:px-10"
        source="/how-it-works.svg"
        sectionId="how-it-works"
      />

      <FAQ />

      <Footer />

      <ToastContainer
        position="top-center"
        theme="colored"
        limit={1}
        autoClose={1000}
      />
    </main>
  );
};

export default Home;
