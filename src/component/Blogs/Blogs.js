import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "./../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";
import { toast } from "react-toastify";

const Blogs = () => {
   const [blogs, setBlogs] = useState([]);
   const [bookmark, setBookmark] = useState([]);
   const [spentTime, setSpentTime] = useState(0);
   useEffect(() => {
      fetch("blogsContent.json")
         .then((res) => res.json())
         .then((data) => setBlogs(data));
   }, []);

   const notify = () => toast.success("This is a success toast!");

   const handleBookmark = (title, id) => {
      console.log(title, id);
      let newBookmark = [...bookmark, title];
      setBookmark(newBookmark);
      notify();
   };

   const readTimeCount = (time) => {
      let totalSpentTime = spentTime + time;
      setSpentTime(totalSpentTime);
   };

   return (
      <div className="blogs">
         <div className="blogs__container">
            {blogs.map((blog) => (
               <Blog
                  key={blog.id}
                  blog={blog}
                  handleBookmark={handleBookmark}
                  readTimeCount={readTimeCount}
               ></Blog>
            ))}
         </div>
         <div className="blogs__bookmark">
            {<Bookmark bookmark={bookmark} spentTime={spentTime}></Bookmark>}
         </div>
      </div>
   );
};

export default Blogs;
