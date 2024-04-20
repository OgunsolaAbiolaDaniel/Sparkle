import React from 'react'
import classes from './signIn.module.css'
import { FaSignInAlt } from "react-icons/fa";
function SignIn() {
  return (
    <section className={classes.sect}>
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
        <div className={classes.forgotpasstxt}>Forgot Password?</div>
      </div>
      <div className={classes.check}>
        <input
          title="chekbox"
          type="checkbox"
          name="checkbutton"
          id=""
          className={classes.checkbox}
        />
        <div>Remember me for 30 days</div>
      </div>
      <button type="button" title="Login Button" className={classes.loginbtn}>
        <FaSignInAlt />
        LOG IN
      </button>
    </section>
  );
}

export default SignIn