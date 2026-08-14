import "./App.css";
import Home from "./Pages/Home"
import About from "./Pages/About"
import { BrowserRouter,Routes, Route, Link } from "react-router-dom"
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";



function App() {
  return (
    <>
     <BrowserRouter>
      {/* Navigation */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">MyWebsite</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto text-white">
        <li class="nav-item me-10"><Link className="px-4 text-white text-decoration-none" to="/">Home</Link></li>
        <li class="nav-item"><Link className="px-4 text-white text-decoration-none" to="/about">About Us</Link></li>
        <li class="nav-item"><Link className="px-4 text-white text-decoration-none" to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  </div>
</nav>
      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> 
 
      </nav> */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
 <Footer />
    </>
   
    
  );
}


export default App
