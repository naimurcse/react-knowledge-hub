import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
// import { faBookmark } from "@fortawesome/free-solid-svg-icons";
// import { faBookmark } from "@fortawesome/free-brands-svg-icons";

const Blog = ({ blog, handleBookmark, readTimeCount, currentIcon, isBookmarked }) => {
   // console.log(props);
   const { id, blogCover, authorName, authorImage, blogTitle, readTime, publish } = blog;
   // const handleBookmark = props.handleBookmark;
   // const readTimeCount = props.readTimeCount;
   // const currentIcon = props.currentIcon;
   console.log("isBookmarked", isBookmarked);
   return (
      <div className="blog">
         <img src={blogCover} alt="" className="blog__cover" />

         <div className="blog__info">
            <div className="blog__author-container">
               <div className="blog__author">
                  <img src={authorImage} alt="" className="blog__author-img" />
               </div>
               <div>
                  <h3 className="blog__author-name">{authorName}</h3>
                  <p className="blog__publish">{publish}</p>
               </div>
            </div>
            <div>
               <span className="blog__read-time">{readTime} min read </span>{" "}
               <span className="blog__bookmark-icon" onClick={() => handleBookmark(blog)}>
                  <FontAwesomeIcon icon={faBookmark} />
               </span>
            </div>
         </div>

         <h2 className="blog__title">{blogTitle}</h2>
         <p className="blog__hash">#beginners</p>
         <p className="blog__hash">#programmer</p>
         <a href="#" className="btn-secondary" onClick={() => readTimeCount(readTime)}>
            Mark as read
         </a>
      </div>
   );
};

export default Blog;
