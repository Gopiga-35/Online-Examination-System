import React from "react";
import { Link } from "react-router-dom";

const QuestionHeader = () => {
  return (
    <nav className="navbar">
      <h1>Gradify!</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/assessments">Assessments</Link></li>
        <li><Link to="/questions">Questions</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default QuestionHeader;  
