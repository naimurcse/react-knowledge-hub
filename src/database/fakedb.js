import { element } from "prop-types";

// Add spent time to local storage
const setSpentTimeToDb = (newTime) => {
   let spentTime = getSpentTime();
   if (spentTime) {
      spentTime = spentTime + newTime;
   } else {
      spentTime = newTime;
   }
   localStorage.setItem("spent-time", spentTime);
};

// To get time from database
const getSpentTime = () => {
   const spentTimeString = localStorage.getItem("spent-time");
   const spentTime = JSON.parse(spentTimeString);
   return spentTime;
};

// set blog id to database
const setBlogIdToDb = (id) => {
   const storedBlogIds = getBlogIdsFromDb();
   const alreadyExist = storedBlogIds.find((element) => element === id);
   if (!alreadyExist) {
      storedBlogIds.push(id);
   }
   localStorage.setItem("blog-id", JSON.stringify(storedBlogIds));
};

// To get blog id from database
const getBlogIdsFromDb = () => {
   const storedBlogIdsString = localStorage.getItem("blog-id");
   const storedBlogIds = storedBlogIdsString ? JSON.parse(storedBlogIdsString) : [];
   return storedBlogIds;
};

export { setSpentTimeToDb, getSpentTime, getBlogIdsFromDb, setBlogIdToDb };
