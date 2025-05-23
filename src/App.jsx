import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import FinancialAdvisorApp from "./FinancialAdvisorApp";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";  // ✅ import Register component
import ContactUs from './ContactUs';
import AIExpenseSorter from "./AIExpenseSorter";
import LearnBudgeting from './LearnBudgeting';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />  {/* ✅ added route */}
          <Route path="/home" element={<Home />} />
          <Route path="/advisor" element={<FinancialAdvisorApp />} />
          <Route path="/AIExpenseSorter" element={<AIExpenseSorter />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/learn-budgeting" element={<LearnBudgeting />} /> 
          
          {/* <Route path="/achivement" element={<Achivements/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
