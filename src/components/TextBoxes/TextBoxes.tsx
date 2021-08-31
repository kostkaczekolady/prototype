import React from "react";
import Styles from "./TextBoxes.module.scss";

export const TextBoxes = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <h3>Paper is awesome!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
          mollis orci, sed rhoncus sapien nunc eget odio.
        </p>
      </div>
      <div className={Styles.container}>
        <h3>Paper is awesome!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet.
        </p>
      </div>
      <div className={Styles.container}>
        <h3>Paper is awesome!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet la.
        </p>
      </div>
    </div>
  );
};
