import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import ReadingPage from "./components/ReadingPage/ReadingPage";
import './App.css';

function App() {
  return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route  path="/@:userName/:id" element={<ReadingPage/>} />
            </Routes>
            <Footer/>
        </Router>
  );
}

export default App;
