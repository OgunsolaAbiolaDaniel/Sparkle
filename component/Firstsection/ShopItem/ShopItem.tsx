import React from 'react'
import classes from './shopitem.module.css'
import Image from 'next/image'
import { IoIosClose } from "react-icons/io";
import boboimage from '@/public/assets/images/bobo.jpg'
function ShopItem() {
  return (
    <div className={classes.card}>
          <div className={classes.productimage}><Image className={classes.itemimage} src={boboimage} width={100}  alt='shopping product image' /></div>
          <div className={classes.secsect}>
            <button className={classes.deletebtn} type='button' title='Delete button'><IoIosClose className={classes.deletebtnicon} /></button>
              <h3 className={classes.producttitle}> Skull Tee</h3>
              <p className={classes.quantity}>Quantity: 1</p>
              <p className={classes.price}> $75.00</p>
          </div>
    </div>
  )
}

export default ShopItem