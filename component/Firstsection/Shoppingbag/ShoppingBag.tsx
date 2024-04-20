import React from 'react'
import classes from './shoppingbag.module.css'
import { IoCloseOutline } from 'react-icons/io5';
function ShoppingBag() {
  return (
    <div className={classes.sect}>
      <header className={classes.header}>
        <button
          type="button"
          title="Closemodalbutton"
          className={classes.cancelbtn}
        >
          <IoCloseOutline className={classes.closebtnicon} />
        </button>
      </header>

      <div></div>

      <div></div>
    </div>
  );
}

export default ShoppingBag