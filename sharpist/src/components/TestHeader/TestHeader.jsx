import React from "react";
import styles from "./TestHeader.module.scss";
const TestHeader = () => {
  return (
    <div className={styles.test_section}>
      <p>
        Through our system, you can find out your knowledge by creating a test
        even in the case when you upload the knowledge you received from
        external factors
      </p>
      <button className={styles.btn_test}>Make a test</button>
    </div>
  );
};

export default TestHeader;
