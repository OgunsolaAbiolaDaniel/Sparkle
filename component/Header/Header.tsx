'use client'
import React, { useState } from 'react'
import { LuSearch } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import classes from './header.module.css'
import Image from 'next/image'
import logo from "@/public/assets/images/sparkles.png";
import Menubar from '../Menubar/Menubar';

function Header() {

  const [showMenu, setShowMenu] = useState(false);
  function handleShowMenu() {
    setShowMenu(true);
    console.log("True")
  }
  function handleCloseMenu() {
    setShowMenu(false)
  }
  return (
    <>
      <div className={classes.header}>
        <div className={classes.fulllogo}>
          <Image src={logo} className={classes.logo} alt= "Sparklelogo.png" />
          <h1 className={classes.cpn}>Sparkle</h1>
        </div>
        <nav className={classes.nav}>
          <ul className={classes.navli}>
            <li>Home</li>
            <li>About Us</li>
            <li>Men's</li>
            <li>Women's</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className={classes.snc}>
          <input
            type="search"
            name=""
            id=""
            placeholder=" Search a product..."
            className={classes.searchbar}
          />
          <button
            type="button"
            title="Search Button"
            className={classes.searchButton}
          >
            <LuSearch className={classes.searchIcon} />
          </button>
          <button type="button" title="Cart Button" className={classes.cartbtn}>
            <TiShoppingCart className={classes.cart} />
          </button>
        </div>

        <div className={classes.bars}>
          <button
            type="button"
            className={classes.loginBtn}
            title="Sign In Button"
          >
            Sign In
          </button>
          <button
            type="button"
            className={classes.menubutton}
            onClick={handleShowMenu}
            title="Menu button"
          >
            <FaBars className={classes.menubar} />
          </button>
        </div>
      </div>
      {showMenu ?<Menubar onClose={handleCloseMenu} />:null}
    </>
  );
}

export default Header