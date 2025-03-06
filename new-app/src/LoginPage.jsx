import { useState, useEffect } from "react";

function LoginPage({ onLogin }) {
  const [name, setName] = useState("");
  
  const handleLogin = () => {
    if (name.trim() === "") {
      return;
    }
    localStorage.setItem("studentName", name);
    onLogin(name);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Login to Start Exam</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      />
      <br />
      <button onClick={handleLogin} style={{ padding: "10px 20px", background: "blue", color: "white" }}>
        Start Exam
      </button>
    </div>
  );
}

function ExamPage() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState(localStorage.getItem("studentName") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("studentName"));

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const questionsParam = queryParams.get("questions");
    
    if (!isLoggedIn) {
      window.location.href = "/"; 
      return;
    }
    
    if (questionsParam) {
      const parsedQuestions = JSON.parse(decodeURIComponent(questionsParam));
      setQuestions(parsedQuestions);
      localStorage.setItem("examQuestions", JSON.stringify(parsedQuestions));
    } else {
      const savedQuestions = localStorage.getItem("examQuestions");
      if (savedQuestions) {
        setQuestions(JSON.parse(savedQuestions));
      }
    }
  }, [isLoggedIn]);

  const handleLogin = (studentName) => {
    setName(studentName);
    setIsLoggedIn(true);
  };

  const handleSubmit = () => {
    localStorage.removeItem("studentName"); 
    localStorage.removeItem("examQuestions");
    setIsLoggedIn(false);
    window.location.reload(); 
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, {name}</h1>
      <h2>Your Exam</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index} style={{ margin: "10px 0" }}>{question}</li>
        ))}
      </ul>
      <button onClick={handleSubmit} style={{ padding: "10px 20px", background: "green", color: "white" }}>
        Submit Exam
      </button>
    </div>
  );
}

export default ExamPage;
