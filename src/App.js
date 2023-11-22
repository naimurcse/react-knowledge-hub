import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Faq from "./component/Faq/Faq";
import Header from "./component/Header/Header";
import { ToastContainer } from "react-toastify";

function App() {
   return (
      <div className="container">
         <Header></Header>
         <Blogs></Blogs>
         <Faq></Faq>
      </div>
   );
}

export default App;
