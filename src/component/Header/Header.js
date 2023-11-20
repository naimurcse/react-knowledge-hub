import React from "react";
import User from "../../images/user.jpg";
import "./Header.css";

const Header = () => {
   return (
      <header className="header">
         <div className="header__logo">
            <h2>Knowledge Hub</h2>
         </div>
         <div className="header__user">
            <img className="header__user-img" src={User} alt="" />
         </div>
      </header>
   );
};

export default Header;
