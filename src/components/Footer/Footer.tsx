import { Facebook, Logo, Twitter, LinkedIn } from "../../assets/icons/icons";
import Styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.description}>
        <Logo />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
          mollis orci, sed rhoncus sapien nunc eget odio. mus. Nam fermentum,
          nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
          sapien nunc eget odio.
        </p>
      </div>
      <div className={Styles.container}>
        <div className={Styles.bestsellers}>
          <h4>Bestsellers</h4>
          <ul>
            <li>
              <a href="#">A4</a>
            </li>
            <li>
              <a href="#">A5</a>
            </li>
            <li>
              <a href="#">Pens</a>
            </li>
            <li>
              <a href="#">Staplers</a>
            </li>
            <li>
              <a href="#">Notes</a>
            </li>
            <li>
              <a href="#">A4</a>
            </li>
            <li>
              <a href="#">A5</a>
            </li>
            <li>
              <a href="#">Pens</a>
            </li>
            <li>
              <a href="#">Staplers</a>
            </li>
            <li>
              <a href="#">Notes</a>
            </li>
          </ul>
        </div>
        <div className={Styles.social}>
          <h4>We're social</h4>
          <div className={Styles.icon}>
            <Facebook />
            <a href="#">Facebook</a>
          </div>
          <div className={Styles.icon}>
            <Twitter />
            <a href="#">Twitter</a>
          </div>
          <div className={Styles.icon}>
            <LinkedIn />
            <a href="#">Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  );
};
