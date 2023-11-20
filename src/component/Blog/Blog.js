import React from "react";
import "./Blog.css";

const Blog = (props) => {
   console.log(props.blog);
   const { blogCover, authorName, authorImage, blogTitle, readTime, publish } = props.blog;
   return (
      <div className="blog">
         <img src={blogCover} alt="" className="blog__cover" />

         <div className="blog__info">
            <div className="blog__author-container">
               <div className="blog__author">
                  <img src={authorImage} alt="" className="blog__author-img" />
               </div>
               <div>
                  <h3>{authorName}</h3>
                  <p>{publish}</p>
               </div>
            </div>
            <div>
               <p>{readTime} min read</p>
            </div>
         </div>

         <h2 className="blog__title">{blogTitle}</h2>
      </div>
   );
};

export default Blog;
