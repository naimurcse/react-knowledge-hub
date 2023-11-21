import React from "react";
import "./Bookmark.css";
import Title from "../Title/Title";

const Bookmark = (props) => {
   const titles = props.bookmark;
   const spentTime = props.spentTime;
   return (
      <div className="bookmark-section">
         <div className="spent-time">
            <h2 className="spent-time__text">Spent time on read : {spentTime} min</h2>
         </div>

         <div className="bookmark">
            <h3 className="bookmark__counter">Bookmarked Blogs : {titles.length}</h3>

            {titles.map((title) => (
               <Title title={title}></Title>
            ))}
         </div>
      </div>
   );
};

export default Bookmark;
