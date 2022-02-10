import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import MainPage from "./components/dashboard/mainpage";

import LoginForm from "./components/forms/loginform";
import Quiz from "./components/Quiz/Quiz.js";
function App() {
  return (
    
   <Router>
      <Routes>
      <Route exact path="/" element={<LoginForm/>}/>
         
      <Route exact path="/dashboard" element={<MainPage/>}/>
      <Route exact path="/quiz" element={<Quiz/>}/>

      </Routes>
    </Router> 
  );
}

export default App;
