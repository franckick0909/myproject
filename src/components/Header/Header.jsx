import { useEffect } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Social from "../Social/Social";
import "./Header.scss";
import { useState } from "react";
import NavbarMobile from "../NavbarMobile/NavbarMobile";


const Header = () => {

const [bg, setBg] = useState(false);

useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 60 ? setBg(true) : setBg(false);
    });
  });

    return (
        <header className={ bg ? "header active" : "header"} >
            <Logo />
            <Navbar />
            <Social />
            <NavbarMobile />
        </header>
    );
};

export default Header;