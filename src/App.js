import "./App.css"
import React from "react";

function App() {





  return (
    <div className="App">

      <div style={{
        
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem",
        paddingbottom: "1rem",
        borderbottom: "1px solid #ccc",
      }}>

        <h3 style={{
          margin: "0 0 0.25rem 0",
        }}>Sushi</h3>

        <div style={{
          fontstyle: "italic",
        }}>I prefer steak than sushi.</div>

        <div style={{
        marginTop: "0.25rem",
        fontWeight: "bold",
        color: "#ad5502",
        fontSize: "1.25rem",
        }}>$9.99</div>

    </div>
    </div>
  );
}

export default App;
