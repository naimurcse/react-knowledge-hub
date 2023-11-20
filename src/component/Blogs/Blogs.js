import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "./../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Blogs = () => {
   const [blogs, setBlogs] = useState([]);
   useEffect(() => {
      fetch("fakedb.json")
         .then((res) => res.json())
         .then((data) => setBlogs(data));
   }, []);

   return (
      <div>
         <div>
            {blogs.map((blog) => (
               <Blog key={blog.id} blog={blog}></Blog>
            ))}
         </div>
         <div>
            <Bookmark></Bookmark>
         </div>
      </div>
   );
};

export default Blogs;
