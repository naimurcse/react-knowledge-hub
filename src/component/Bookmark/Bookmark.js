import React from "react";
import "./Bookmark.css";
import Title from "../Title/Title";

const Bookmark = (props) => {
   const bookmarkedBlogs = props.bookmark;

   const spentTime = props.spentTime;

   return (
      <div className="bookmark-section">
         <div className="spent-time">
            <h2 className="spent-time__text">
               Spent time on read : {spentTime ? spentTime : 0} min
            </h2>
         </div>

         <div className="bookmark">
            <h3 className="bookmark__counter">Bookmarked Blogs : {bookmarkedBlogs.length}</h3>

            {bookmarkedBlogs.map((blog) => (
               <Title title={blog.blogTitle} key={blog.id}></Title>
            ))}
         </div>
      </div>
   );
};

export default Bookmark;
