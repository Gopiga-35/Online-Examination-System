import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import QuestionHeader from "./QuestionHeader";
import ExamHeader from "./ExamHeader";
import HomePage from "./HomePage";
import AssessmentsPage from "./AssessmentsPage";
import ExamPage from "./ExamPage";
import DashBoardPage from "./DashBoardPage";
import QuestionPage from "./QuestionPage";

const Layout = ({ children }) => {
  const location = useLocation();

  const showExamHeader = location.pathname.startsWith("/exam");

  return (
    <div>
      {showExamHeader ? <ExamHeader /> : <QuestionHeader />}
      <main>{children}</main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assessments" element={<AssessmentsPage />} />
          <Route path="/exam" element={<ExamPage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
          <Route path="/questions" element={<QuestionPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
