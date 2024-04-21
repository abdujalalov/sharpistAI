import React from "react";
import styles from "./Brands.module.scss";
import Marquee from "react-fast-marquee";
import brand1 from "../../assets/udemy_black.png";
import brand2 from "../../assets/exd_black.png";
import brand3 from "../../assets/coursera2.png";
import brand4 from "../../assets/mohirdev.png";
import brand5 from "../../assets/brand.png";
const Brands = () => {
  return (
    <div className={styles.brands_section}>
      <Marquee className={styles.effect_brands}>
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
      </Marquee>
    </div>
  );
};

export default Brands;
