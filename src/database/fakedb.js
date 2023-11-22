//! spent-time ? totalTime += newTime : totalTime = newTime

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

export { setSpentTimeToDb, getSpentTime };
