import { useState } from "react";

function AssessmentsPage() {
  const [numQuestions, setNumQuestions] = useState("");
  const [shareableLink, setShareableLink] = useState(null);

  const handleGenerateExam = () => {
    const num = parseInt(numQuestions, 10);
    if (!num || num <= 0) {
      alert("Please enter a valid number of questions!");
      return;
    }
    const selectedQuestions = Array.from(
      { length: num },
      (_, i) => `Question ${i + 1}`
    );
    const queryString = encodeURIComponent(JSON.stringify(selectedQuestions));
    const link = `${window.location.origin}/exam?questions=${queryString}`;
    setShareableLink(link);
  };

  const handleShareLink = () => {
    if (shareableLink) {
      navigator.clipboard.writeText(shareableLink);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh", 
        backgroundImage: "url('https://www.shutterstock.com/image-photo/checklist-clipboard-task-documentation-management-600nw-2470813805.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          border: "2px solid #004d00",
          width: "35%",
          maxWidth: "300px",
          minWidth: "300px",
          position: "absolute", 
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", 
        }}
      >
        <h1 style={{ fontSize: "28px", marginBottom: "20px", color: "green" }}>
          Assessments
        </h1>
        <input
          type="number"
          placeholder="Enter number of questions"
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value.replace(/[^0-9]/g, ""))}
          min="1"
          style={{
            width: "250px",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid black",
            textAlign: "center",
          }}
        />
        <br />
        <button
          onClick={handleGenerateExam}
          style={{
            padding: "10px 20px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Generate Exam
        </button>
        {shareableLink && (
          <div style={{ marginTop: "10px" }}>
            <p style={{ color: "green", fontWeight: "bold" }}>Share this link:</p>
            <input
              type="text"
              value={shareableLink}
              readOnly
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                textAlign: "center",
              }}
            />
            <br />
            <button
              onClick={handleShareLink}
              style={{
                marginTop: "10px",
                padding: "10px 15px",
                background: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Share Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AssessmentsPage;
