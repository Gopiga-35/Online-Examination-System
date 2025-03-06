import React, { useState, useEffect } from "react";

const ExamPage = () => {
  const [student, setStudent] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (isLoggedIn) {
      fetchQuestions();
    }
  }, [isLoggedIn]);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/questions");
      const data = await response.json();
      setQuestions(data);
    } catch (err) {
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (studentData) => {
    setStudent(studentData);
    setIsLoggedIn(true);
  };

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = async () => {
    const submissionData = { ...student, answers };

    try {
      await fetch("https://api.example.com/submit-exam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      alert("Exam submitted successfully!");
    } catch (error) {
      alert("Failed to submit exam. Please try again.");
    }
  };

  return (
    
    <div className="container" style={{
      background: 'url("https://e0.pxfuel.com/wallpapers/740/200/desktop-wallpaper-solid-light-purple-top-solid-light-purple-solid-purple-background-plain-purple.jpg")',
       backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }} >
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <ExamContent
          loading={loading}
          questions={questions}
          onAnswerChange={handleAnswerChange}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
 
const LoginForm = ({ onLogin }) => {
  const [studentData, setStudentData] = useState({ name: "", id: "", course: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentData.name && studentData.id && studentData.course) {
      onLogin(studentData);
    }
  };

  return (
    <div className="login-box" >
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentData.name}
          onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Student ID"
          value={studentData.id}
          onChange={(e) => setStudentData({ ...studentData, id: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Course"
          value={studentData.course}
          onChange={(e) => setStudentData({ ...studentData, course: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const ExamContent = ({ loading, questions, onAnswerChange, onSubmit }) => (
  <div className="exam-box">
    <h2>Exam Questions</h2>
    {loading ? (
      <p>Loading questions...</p>
    ) : (
      <ul className="question-list">
        {questions.map((q, index) => (
          <li key={index} className="question-item">
            <strong>Question {index + 1}:</strong> {q.question}
            <ul className="options-list">
              {q.options.map((option, idx) => (
                <li key={idx} className="option">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    id={`q${index}-option${idx}`}
                    value={option}
                    onChange={() => onAnswerChange(index, option)}
                  />
                  <label htmlFor={`q${index}-option${idx}`}>
                    {String.fromCharCode(65 + idx)}. {option}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )}
    <button className="submit-btn" onClick={onSubmit}>
      Submit Exam
    </button>
  </div>
);

export default ExamPage;
