import Styles from "./DesktopMenu.module.scss";

export const DesktopMenu = () => {
  return (
    <div className={Styles.wrapper}>
      <a href="#">All our products</a>
      <a href="#">Inspiration for the office</a>
      <a href="#">About US</a>
    </div>
  );
};
