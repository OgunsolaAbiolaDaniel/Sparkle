import React from 'react'
import classes from'./menubar.module.css'
import Menulistitem, { Menusublistitem } from '../MenulistItem/Menulistitem'
import { CiSearch } from "react-icons/ci";
function Menubar() {
  return (
    <div className={classes.menubar}>
      <ul className={classes.unorderedlist}>
        <li>
          <Menulistitem text="Home">
            <ul className={classes.menuunorderedsublist}>
              <li>
                <Menusublistitem text="Home1 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home2 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home3 -Design" news={true} />
              </li>
              <li>
                <Menusublistitem text="Home4 -Design" news={true} />
              </li>
            </ul>
          </Menulistitem>
        </li>

        <li>
          <Menulistitem text="Shop">
            <ul className={classes.menuunorderedsublist}>
              <li>
                <Menusublistitem text="Home1 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home2 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home3 -Design" news={true} />
              </li>
              <li>
                <Menusublistitem text="Home4 -Design" news={true} />
              </li>
            </ul>
          </Menulistitem>
        </li>
        <li>
          <Menulistitem text="Product Cards">
            <ul className={classes.menuunorderedsublist}>
              <li>
                <Menusublistitem text="Home1 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home2 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home3 -Design" news={true} />
              </li>
              <li>
                <Menusublistitem text="Home4 -Design" news={true} />
              </li>
            </ul>
            <ul className={classes.menuunorderedsublist}>
              <li>
                <Menusublistitem text="Home1 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home2 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home3 -Design" news={true} />
              </li>
              <li>
                <Menusublistitem text="Home4 -Design" news={true} />
              </li>
            </ul>
          </Menulistitem>
        </li>
        <li>
          <Menulistitem text="Icons">
            <ul className={classes.menuunorderedsublist}>
              <li>
                <Menusublistitem text="Home1 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home2 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home3 -Design" news={true} />
              </li>
              <li>
                <Menusublistitem text="Home4 -Design" news={true} />
              </li>
            </ul>
          </Menulistitem>
        </li>
        <li>
          <Menulistitem text="Docs">
            <ul className={classes.menuunorderedsublist}>
              <li>
                <Menusublistitem text="Home1 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home2 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home3 -Design" news={true} />
              </li>
              <li>
                <Menusublistitem text="Home4 -Design" news={true} />
              </li>
            </ul>
          </Menulistitem>
        </li>
        <li>
          <Menulistitem text="About us">
            <ul className={classes.menuunorderedsublist}>
              <li>
                <Menusublistitem text="Home1 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home2 -Fashion" news={false} />
              </li>
              <li>
                <Menusublistitem text="Home3 -Design" news={true} />
              </li>
              <li>
                <Menusublistitem text="Home4 -Design" news={true} />
              </li>
            </ul>
          </Menulistitem>
        </li>
      </ul>

      <div className={classes.searchbar}>
        <input
          type="search"
          title="Search"
          name="search bar"
          className={classes.inputfield}
          placeholder="Search"
          id=""
        />

        <button
          type="button"
          title="Search Button"
          className={classes.searchbtn}
        >
          <CiSearch className={classes.searchicon} />
        </button>
      </div>
    </div>
  );
}

export default Menubar



