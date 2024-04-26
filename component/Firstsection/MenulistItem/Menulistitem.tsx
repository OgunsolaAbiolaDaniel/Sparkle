'use client'
import React from 'react'
import { useState } from 'react';
import classes from './menulistitem.module.css'
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Menulistitem({ text, children }: { text: string, children: any }) {
  const [showsub, setShowsub] = useState(false)
  function togglesublistmenu() {
    setShowsub(!showsub);
  }
  return (
    <div>
      <div className={classes.listele} onClick={togglesublistmenu}>
        <div className={classes.text}>{text}</div>
        <div>
          <button
            type="button"
            title="Dropdown btn"
            className={classes.dropdownbtn}
          >
            <RiArrowDropDownLine className={classes.dropdownbtnicon} />
          </button>
        </div>
      </div>
      {showsub ? <>{children}</> : null}
    </div>
  );
}

export function Menusublistitem({text, news }: { text: string, news: boolean }) {
  return <div className={classes.subtext}>{text}{news ? <New/>:null}</div>;
}
export function New (){
  return (
    <div className={classes.newtag}>New</div>
  )
}

