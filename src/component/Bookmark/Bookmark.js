import React from "react";
import "./Bookmark.css";

const Bookmark = () => {
   return (
      <div>
         <div className="spent-time">
            <h2 className="spent-time__text">Spent time on read : 177 min</h2>
         </div>

         <div className="bookmark">
            <h3>Bookmarked Blogs : 8</h3>
            <div className="bookmark__title-container">
               <h4 className="bookmark__title">
                  Master Microsoft Power Platform and Become an In-Demand!
               </h4>
            </div>
            <div className="bookmark__title-container">
               <h4 className="bookmark__title">
                  Master Microsoft Power Platform and Become an In-Demand!
               </h4>
            </div>
            <div className="bookmark__title-container">
               <h4 className="bookmark__title">
                  Master Microsoft Power Platform and Become an In-Demand!
               </h4>
            </div>
         </div>
      </div>
   );
};

export default Bookmark;
