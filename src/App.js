import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Header from "./component/Header/Header";

function App() {
   return (
      <div className="container">
         <Header></Header>
         <Blogs></Blogs>
      </div>
   );
}

export default App;
