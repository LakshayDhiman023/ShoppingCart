import React from "react";
import "./header.css";
import Logo from "../logo/Logo";
import SearchBar from "../searchBar/SearchBar";
import Buttons from "../customButtons/Buttons";

function Header() {
  return (
    <>
      <nav className="navbar">
        <Logo />
        <SearchBar />
        <Buttons/>
      </nav>
    </>
  );
}

export default Header;
