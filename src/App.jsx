import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Notfound from "./Components/Notfound";

import "./Styles/notfound.scss"
import Starred from "./Components/Starred";


function App() {
  return <div className="App">

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/starred" element={<Starred/>} />
        <Route path="*" element={<Notfound/>}/>

        
      </Routes>
    </Router>

  </div>;
}

export default App;
