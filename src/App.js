import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import JoinUs from "./components/Join/JoinUs";
import Login from "./components/Join/Login";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/register" component={JoinUs} />
        <Route path="/login" component={Login} />
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
