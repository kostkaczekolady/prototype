import React from "react";
import Styles from "./ProductDescription.module.scss";

export const ProductDescription = () => {

  const readMore = () => {
    
  }

  return (
    <div className={Styles.wrapper}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
        justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam
        fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,
        sed rhoncus sapien nunc eget odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
        justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam
        fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,
        sed rhoncus sapien nunc eget odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
        justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam
        fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,
        sed rhoncus sapien nunc eget odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
        justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam
        fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,
        sed rhoncus sapien nunc eget odio.
      </p>
      <button onClick={()=>readMore}>Read more</button>
    </div>
  );
};
