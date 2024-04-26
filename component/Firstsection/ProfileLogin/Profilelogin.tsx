'use client'
import React from 'react'
import Signup from './Signup/Signup';
import SignIn from './SignIn/SignIn'
import classes from './profilelogin.module.css'
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from 'react';

function Profilelogin({ onClose }:any) {
  const [witch, setwitch] = useState(false);
  function changeloginstatustrue() {
    setwitch(false);
  }
  function changeloginstatusfalse() {
    setwitch(true);
  }
  
  return (
    <div className={classes.profilediv}>
      <header className={classes.header}>
        <button
          type="button"
          title="Closemodalbutton"
          className={classes.cancelbtn}
          onClick={onClose}
        
        >
          <IoCloseOutline className={classes.closebtnicon} />
        </button>
      </header>
      <nav className={classes.navbar}>
        <div onClick={changeloginstatustrue}>Login</div>
        <div onClick={changeloginstatusfalse}>Register</div>
      </nav>
      <hr className={classes.rule} />
      <div>{witch ? <Signup /> : <SignIn />}</div>
      <hr className={classes.rule} />
      <div className={classes.socials}>
        <button type="button" title="Facebook Button" className={classes.fbbtn}>
          <FaFacebookF className={classes.fbicon} />
        </button>
        <button
          type="button"
          title="Google Button"
          className={classes.googlebtn}
        >
          <FcGoogle className={classes.googleicon} />
        </button>
        <button type="button" title="Twitter Button" className={classes.xbtn}>
          <FaXTwitter className={classes.xicon} />
        </button>
      </div>
    </div>
  );
}

export default Profilelogin