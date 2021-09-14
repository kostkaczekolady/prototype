import { Facebook, Logo, Twitter, LinkedIn } from "../../assets/icons/icons";
import Styles from "./Footer.module.scss";

export const Footer = () => {
  const schoolSupplies = [
    {
      href: "#",
      label: "A4",
    },
    {
      href: "#",
      label: "A5",
    },
    {
      href: "#",
      label: "Pens",
    },
    {
      href: "#",
      label: "Staplers",
    },
    {
      href: "#",
      label: "Notes",
    },
    {
      href: "#",
      label: "A4",
    },
    {
      href: "#",
      label: "A5",
    },
    {
      href: "#",
      label: "Pens",
    },
    {
      href: "#",
      label: "Staplers",
    },
    {
      href: "#",
      label: "Notes",
    },
  ];

  const socialLinks = [
    {
      href: "#",
      label: "Facebook",
    },
    {
      href: "#",
      label: "Twitter",
    },
    {
      href: "#",
      label: "Linkedin",
    },
  ];

  const findLogo = (linkText: string) => {
    switch (linkText) {
      case "Facebook":
        return <Facebook />;
      case "Linkedin":
        return <LinkedIn />;
      case "Twitter":
        return <Twitter />;
      default:
        return null;
    }
  };

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
            {schoolSupplies.map((element) => {
              const { href, label } = element;
              return (
                <li>
                  <a href={href}>{label}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={Styles.social}>
          <h4>We're social</h4>
          {socialLinks.map((element) => {
            const { href, label } = element;
            return (
              <div className={Styles.icon}>
                {findLogo(label)}
                <a href={href}>{label}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
