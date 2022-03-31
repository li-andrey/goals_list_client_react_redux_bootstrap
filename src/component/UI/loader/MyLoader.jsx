import React from "react";
import cl from "./MyLoader.module.css";

const MyLoader = () => {
  return (
    <div className={cl.loader__wrapper}>
      <div className={cl.loader}></div>
    </div>
  );
};

export default MyLoader;
