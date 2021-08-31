import { OnDesktopOnly, OnMobileAndTabletOnly } from "../../tools";
import { ImageBanner } from "../ImageBanner";
import { OtherProducts } from "../OtherProducts";
import { ProductDescription } from "../ProductDescription";
import { ProductDetails } from "../ProductDetails";
import Styles from "./Product.module.scss";

export const Product = () => {
  return (
    <div className={Styles.wrapper}>
      <OnMobileAndTabletOnly>
        <ProductDetails />
        <ImageBanner />
        <ProductDescription />
      </OnMobileAndTabletOnly>
      <OnDesktopOnly>
        <div className={Styles.container}>
          <div className={Styles.sectionLeft}>
            <OtherProducts />
            <ImageBanner />
          </div>
          <div className={Styles.sectionRight}>
            <ProductDetails />
            <ProductDescription />
          </div>
        </div>
      </OnDesktopOnly>
    </div>
  );
};
