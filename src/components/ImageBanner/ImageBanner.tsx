import { useState } from "react";
import paper1 from "../../assets/photos/paper1.jpg";
import paper2 from "../../assets/photos/paper2.jpg";
import paper3 from "../../assets/photos/paper3.jpg";
import Styles from "./ImageBanner.module.scss";

export const ImageBanner = () => {
  const [chosenIamge, setChosenImage] = useState(0);

  const images = [
    {
      src: paper1,
      alt: "imaage 1",
    },
    {
      src: paper2,
      alt: "imaage 2",
    },
    {
      src: paper3,
      alt: "imaage 3",
    },
  ];

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.chosenImg}>
        <img src={images[chosenIamge].src} alt={images[chosenIamge].alt}/>
      </div>
      <div className={Styles.container}>
        {images.map((element, index) => {
          const { src, alt } = element;
          return (
            <img src={src} alt={alt} onClick={() => setChosenImage(index)} />
          );
        })}
      </div>
    </div>
  );
};
