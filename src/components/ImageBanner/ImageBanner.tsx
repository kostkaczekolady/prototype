import React, { useState } from "react";
import  paper1  from "../../assets/photos/paper1.jpg";
import  paper2  from "../../assets/photos/paper2.jpg";
import  paper3  from "../../assets/photos/paper3.jpg";
import Styles from "./ImageBanner.module.scss";

export const ImageBanner = () => {
  const [chosenIamge, setChosenImage] = useState(paper1);


  return (
      <div className={Styles.wrapper}>
        <div className={Styles.chosenImg}>
          <img src={chosenIamge}/>
        </div>
        <div className={Styles.container}>
          <img onClick={()=>setChosenImage(paper1)} alt="" src={paper1}/>
          <img onClick={()=>setChosenImage(paper2)} alt="" src={paper2}/>
          <img onClick={()=>setChosenImage(paper3)} alt="" src={paper3}/>
        </div>
    </div>
  );
};
