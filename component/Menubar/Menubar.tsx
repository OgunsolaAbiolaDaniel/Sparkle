import React from 'react'
import classes from '@/component/Menubar/menubar.module.css'
import { IoIosClose } from "react-icons/io";

import { TiShoppingCart } from "react-icons/ti";

function Menubar({ onClose }: { onClose :any}) {
  return (
    <div className={classes.menubar}>
      <div className={classes.closeBtn}>
        <button type="button" title="Close Button" onClick={onClose}><IoIosClose className={classes.closeIcon} /></button>
      </div>
      <div className={classes.roll}>
        <ul>
          <li>
            <button type="button">Home</button>
          </li>
          <li>
            <button type="button">About Us</button>
          </li>
          <li>
            <button type="button">Men's</button>
          </li>
          <li>
            <button type="button">Women's </button>
          </li>
          <li>
            <button type="button">Contact Us</button>
          </li>
          <li>
            <button type="button" title="Cart Button">
              Cart <TiShoppingCart />
            </button>
          </li>
          <li>
            <button>Sign In</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menubar