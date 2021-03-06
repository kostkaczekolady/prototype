import { useDispatch, useSelector } from "react-redux";
import { setChangeProductCount } from "../../redux/actions";
import Styles from "./ProductDetails.module.scss";

export const ProductDetails = () => {
  
  const dispatch = useDispatch();

  const productAmount = useSelector((state: { productCount: {value: number} }) => state.productCount.value);
  const updateProductAmount = () => dispatch(setChangeProductCount(productAmount + 1))


  return (
    <div className={Styles.wrapper}>
      <h2>Paper</h2>
      <div className={Styles.container}>
        <div className={Styles.section}>
          <div className={Styles.prices}>
            <div className={Styles.salePrice}>565,00 kr</div>
            <div className={Styles.price}>670,00 kr</div>
          </div>
          <div className={Styles.select}>
            <select>
              <option>white</option>
              <option>black</option>
            </select>
          </div>
        </div>
        <div className={Styles.buy}>
          <button onClick={()=>updateProductAmount()}>Buy</button>
        </div>
      </div>
    </div>
  );
};
