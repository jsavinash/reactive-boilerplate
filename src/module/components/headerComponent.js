//external import
import * as React from "react";

function HeaderComponent() {
  // const data = useSelector((state) => state.module.data);
  return (
    <div className="header">
      <a href="#default" className="__logo">CompanyLogo</a>
      <div className="header__right">
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default HeaderComponent;
