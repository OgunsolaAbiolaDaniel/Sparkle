import React from 'react'
import classes from '@/component/Menubar/menubar.module.css'
import { IoIosClose } from "react-icons/io";
import Image from 'next/image';
import logo from '@/public/assets/images/sparkles.png'
import { TiShoppingCart } from "react-icons/ti";

function Menubar({ onClose }: { onClose :any}) {
  return (
    <div className={classes.menubar}>
      <header className={classes.header}>
        <div className={classes.fulllogo}>
          <Image src={logo} className={classes.logo} alt="Sparklelogo.png" />
          <h1 className={classes.cpn}>Sparkle</h1>
        </div>
        <div className={classes.closeBtn}>
          <button
            type="button"
            title="Close Button"
            className={classes.cbtn}
            onClick={onClose}
          >
            <IoIosClose className={classes.closeIcon} />
          </button>
        </div>
      </header>

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
            <button
              type="button"
              title="Cart Button"
              className={classes.cartBtn}
            >
              <div>Cart</div>
              <div className={classes.cartdiv}>
                <TiShoppingCart className={classes.cartIcon} />
              </div>
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