import React from "react";
import styles from "./Info.module.scss";
const Info = () => {
  return (
    <div className={styles.wrapper_info}>
      <p>
        Strive for the higher together with the <span>Dots Academy</span>
      </p>
      <button className={styles.btn_info}>Join now</button>
    </div>
  );
};

export default Info;
