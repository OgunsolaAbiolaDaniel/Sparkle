import React from 'react'
import classes from './shoppingbag.module.css'
import { IoCloseOutline } from 'react-icons/io5';
import ShopItem from '../ShopItem/ShopItem';
function ShoppingBag({onClose}:any) {
  return (
    <div className={classes.sect}>
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

      <div className={classes.shoppinglist}>
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>

      <div className={classes.lastsect}>
        <p>Subtotal: $465.32</p>
        <button type="button" title="View Cart" className={classes.vcbtn}>
          VIEW CART
        </button>
        <button type="button" title="View Cart" className={classes.checkoutbtn}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default ShoppingBag