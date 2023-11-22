import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "./../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";

import {
   setSpentTimeToDb,
   getSpentTime,
   setBlogIdToDb,
   getBlogIdsFromDb,
} from "../../database/fakedb";

const Blogs = () => {
   const [blogs, setBlogs] = useState([]);
   const [bookmark, setBookmark] = useState([]);
   const [spentTime, setSpentTime] = useState(0);

   useEffect(() => {
      fetch("blogsContent.json")
         .then((res) => res.json())
         .then((data) => setBlogs(data));
   }, []);

   const showToast = (isSuccessful) => {
      isSuccessful
         ? toast.success("Successfully bookmarked :)")
         : toast.error("Already bookmarked this blog!");
   };

   const handleBookmark = (newBlog) => {
      let newBookmark = [];
      const savedBlog = bookmark.find((blog) => blog.id === newBlog.id);
      if (!savedBlog) {
         newBookmark = [...bookmark, newBlog];
         showToast(true);
      } else {
         newBookmark = [...bookmark];
         showToast(false);
      }

      setBookmark(newBookmark);
      setBlogIdToDb(newBlog.id);
   };

   const readTimeCount = (time) => {
      let totalSpentTime = spentTime + time;
      setSpentTimeToDb(time);
      setSpentTime(totalSpentTime);
   };

   useEffect(() => {
      const totalSpentTime = getSpentTime();
      setSpentTime(totalSpentTime);
   }, []);

   useEffect(() => {
      const storedIds = getBlogIdsFromDb();
      let savedBlogs = [];

      storedIds.map((id) => {
         const matchedBlog = blogs.find((blog) => blog.id === id);
         if (matchedBlog) {
            savedBlogs.push(matchedBlog);
         }
      });
      setBookmark(savedBlogs);
   }, [blogs]);

   return (
      <div className="blogs">
         <Toaster position="top-right" reverseOrder={false} />
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
            <Bookmark bookmark={bookmark} spentTime={spentTime}></Bookmark>
         </div>
      </div>
   );
};

export default Blogs;
