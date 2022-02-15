import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // V6 - { BrowserRouter, Routes, Route }
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
       
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path='/:user' component={Card} />
          </Switch>
       
      </div>
    </BrowserRouter>
  );
}

export default App;

///V6 - you can't use the component prop anymore. It was replaced in favor of element: <Route path="/" element={<Home />}></Route>
/// 
///          <Routes>        
 ///         <Route path="/" element={<Home />}></Route>
        ///  <Route path="/about" element={<About />}></Route>
        ///  <Route path="/contact" element={<Contact />}></Route></Routes>
///old - <Route exact path='/' component= {Home} />