'use client'

import React from 'react'
import classes from './navbar.module.css'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { RiMenu2Line } from "react-icons/ri";
import Link from 'next/link';
import { useState } from 'react';
import Profilelogin from '../ProfileLogin/Profilelogin';
import ShoppingBag from '../Shoppingbag/ShoppingBag';




function Navbar() {
  const [showprofile, setShowprofile] = useState(false);
  const [showCart, setShowCart] = useState(false);
  
  function showuserprofile() {
        setShowprofile(true);
  }
  function hideuserporfile() {
    setShowprofile(false);
  }
  function handleshowcart() {
    setShowCart(true)
    console.log("cart shown")
  }
  function handleclosecart() {
    setShowCart(false)
  }




    return (
      <>
        <nav className={classes.navbar}>
          <h3 className={classes.brandlogo}>
            <Link href="#" className={classes.homelink}>
              {" "}
              Varkala
            </Link>
          </h3>
          <nav className={classes.middlenav}>
            <button
              type="button"
              title="Userprofile"
              onClick={showuserprofile}
              className={classes.navbtn}
            >
              <CiUser />
            </button>
            <button
              type="button"
              title="Favorite button"
              className={classes.navbtn}
            >
              <CiHeart />
            </button>
            <button
              type="button"
              title="Shopping Bag"
              className={classes.navbtn}
            onClick={handleshowcart}
            >
              <PiShoppingBagOpenThin />
            </button>
          </nav>
          <button
            type="button"
            title="menubutton"
            className={classes.menubutton}
          >
            <RiMenu2Line className={classes.navbtn} />
          </button>
        </nav>
        {showprofile ? <Profilelogin onClose={hideuserporfile} /> : null}
        {showCart ? <ShoppingBag />:null}
      </>
    );
}

export default Navbar