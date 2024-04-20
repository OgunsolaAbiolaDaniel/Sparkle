import React from 'react'
import classes from './signup.module.css'
import { FaUserPlus } from "react-icons/fa";

function Signup() {
    return (
      <section className={classes.sect}>
        <div className={classes.divs}>
          <label htmlFor="name" className={classes.labels}>
            Name
          </label>
          <input
            title="namefield"
            placeholder="Name"
            type="text"
            name=""
            id=""
            className={classes.inputbox}
          />
        </div>
        <div className={classes.divs}>
          <label htmlFor="email" className={classes.labels}>
            Email
          </label>
          <input
            title="emailfield"
            placeholder="@example123.com"
            type="email"
            name=""
            id=""
            className={classes.inputbox}
          />
          <div className={classes.errorfield}>error</div>
        </div>
        <div className={classes.divs}>
          <label htmlFor="email" className={classes.labels}>
            Password
          </label>
          <input
            title="password"
            placeholder="Password"
            type="password"
            name="password"
            id=""
            className={classes.inputbox}
          />
          <div className={classes.forgotpasstxt}>8-10 characters</div>
        </div>
        <div className={classes.check}>
          <input
            title="chekbox"
            type="checkbox"
            name="checkbutton"
            id=""
            className={classes.checkbox}
          />
          <div>I accept to the Terms and Conditions</div>
        </div>
        <button
          type="button"
          title="Login Button"
          className={classes.signinbtn}
        >
          <FaUserPlus className={classes.registericon} />
          <span>Register</span>
        </button>
      </section>
    );
}

export default Signup