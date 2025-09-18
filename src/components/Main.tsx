import mainStyles from "./styles/main.module.css";
import type { JSX } from "react";

const Main = (): JSX.Element => {
  return (
    <div className={mainStyles.mainContainer}>
      <h2>Olá</h2>
      <div className={mainStyles.divGen}></div>
      <div className={mainStyles.divGen}></div>
      <div className={mainStyles.divGen}></div>
      <div className={mainStyles.divGen}></div>
      <div className={mainStyles.divGen}></div>
      <div className={mainStyles.divGen}></div>
    </div>
  );
};

export default Main;
