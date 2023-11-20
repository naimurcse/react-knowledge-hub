import React from "react";
import "./Blogs.css";
import Blog from "./../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Blogs = () => {
   return (
      <div>
         <div>
            <Blog></Blog>
         </div>
         <div>
            <Bookmark></Bookmark>
         </div>
      </div>
   );
};

export default Blogs;
