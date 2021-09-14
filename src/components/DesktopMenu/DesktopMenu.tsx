import Styles from "./DesktopMenu.module.scss";

export const DesktopMenu = () => {
  const links = [
    {
      href: "#",
      label: "All our products",
    },
    {
      href: "#",
      label: "Inspiration for the office",
    },
    {
      href: "#",
      label: "About US",
    },
  ];
  
  return (
    <div className={Styles.wrapper}>
      {links.map((element) => {
        const { href, label } = element;
        return <a href={href}>{label}</a>;
      })}
    </div>
  );
};
