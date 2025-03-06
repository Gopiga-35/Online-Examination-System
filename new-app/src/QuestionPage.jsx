import React, { useState } from "react";

function QuestionPage() {
  const [questions, setQuestions] = useState([]); 
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setQuestions([...questions, file.name]); 
    } else {
      alert("Please upload a valid PDF file.");
    }
  };
  const handleDelete = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <div style={{ 
      textAlign: "center", 
      padding: "50px", 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "top", 
      fontFamily: "times new roman" ,
      color:"solid balck"
    }}>
      <h2 style={{ color: "solid balck", marginBottom: "20px" }}>Upload your Questions here: </h2>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileUpload}
        style={{ 
          padding: "10px", 
          margin: "10px", 
          borderRadius: "5px",  
          cursor: "pointer" 
        }}
      />
      <h3 style={{ color: "solid balck", marginTop: "20px" }}>Uploaded Questions:</h3>
      <ul style={{ color:"solid balck", listStyleType: "none", padding: "0" }}>
        {questions.map((q, index) => (
          <li key={index} style={{ 
            margin: "5px 0", 
            fontSize: "18px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            width: "300px", 
            padding: "10px", 
            border: "2px solid black", 
            borderRadius: "5px"
          }}>
            {q}
            <button 
              onClick={() => handleDelete(index)} 
              style={{ 
                marginLeft: "10px", 
                padding: "5px 10px", 
                background: "red", 
                color: "white", 
                border: "none", 
                borderRadius: "4px", 
                cursor: "pointer" 
              }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionPage;
