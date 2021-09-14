import { useSelector } from "react-redux";
import { Bag, Logo, Hamburger } from "../../assets/icons/icons";
import Styles from "./Header.module.scss";


export const Header = () => {

  const productAmount = useSelector((state: { productCount: {value: number} }) => state.productCount.value);

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
        {productAmount > 0 ? <p className={Styles.amount}>{productAmount} st</p> : null}
        <button>Check out</button>
      </div>
    </div>
  );
};
