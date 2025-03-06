import React from "react";
import { Link } from "react-router-dom";

const ExamHeader = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Gradify!</h1>
      <ul style={styles.navLinks}>
        <li><Link to="/login" style={styles.link}></Link></li>
        <li><Link to="/exam" style={styles.link}>ExamPage</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
    
  navbar: {
    color:"white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "black",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  link: {
    
    justifyContent: "center",
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
  },
};

export default ExamHeader;
