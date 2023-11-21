import React from "react";

const Title = ({ title }) => {
   return (
      <div className="bookmark__title-box">
         <h4 className="bookmark__title">{title}</h4>
      </div>
   );
};

export default Title;
