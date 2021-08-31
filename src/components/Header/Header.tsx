import React, { useState } from "react";
import { Bag, Logo, Hamburger } from "../../assets/icons/icons";
import Styles from "./Header.module.scss";


export const Header = () => {
  const [amount, setAmount] = useState(0);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.hamburger}>
        <Hamburger/>
      </div>
      <div className={Styles.logo}>
        <Logo/>
      </div>
      <div className={Styles.search}>
        <input />
        <button>Search</button>
      </div>
      <div className={Styles.summary}>
        <Bag />
        {amount > 0 ? <p>{amount} st</p> : null}
        <button>Check out</button>
      </div>
    </div>
  );
};
