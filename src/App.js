import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Header from "./component/Header/Header";
import { ToastContainer } from "react-toastify";

function App() {
   return (
      <div className="container">
         <Header></Header>
         <Blogs></Blogs>
      </div>
   );
}

export default App;
