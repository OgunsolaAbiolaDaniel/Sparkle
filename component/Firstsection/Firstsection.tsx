import React from 'react'
import classes from '@/component/Firstsection/firstsection.module.css'
import Navbar from './Navbar/Navbar';



export default function Firstsection() {
    return (
        <>
            <header className={classes.header}>Free in-store delivery</header>
            <Navbar />
        </>
  );
}

