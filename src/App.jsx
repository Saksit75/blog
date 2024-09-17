import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";
import "./App.css";
import Navbar from "./components/Navbar";
import Detail from "./components/detail";
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home" element={<Navigate to="/"/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
