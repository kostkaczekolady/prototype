import Styles from "./OtherProducts.module.scss";

export const OtherProducts = () => {
  const links = [
    {
      href: "#",
      label: "Post-it notes",
    },
    {
      href: "#",
      label: "Staplers",
    },
    {
      href: "#",
      label: "Hole punches",
    },
    {
      href: "#",
      label: "Binders",
    },
    {
      href: "#",
      label: "Paper",
    },
    {
      href: "#",
      label: "Printers",
    },
    {
      href: "#",
      label: "Post-it notes",
    },
    {
      href: "#",
      label: "Staplers",
    },
    {
      href: "#",
      label: "Hole punches",
    },
    {
      href: "#",
      label: "Binders",
    },
    {
      href: "#",
      label: "Paper",
    },
    {
      href: "#",
      label: "Printers",
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
