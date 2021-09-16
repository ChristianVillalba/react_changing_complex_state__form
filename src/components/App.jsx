import React, { useState } from "react";

function App() {
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");

  function handlefNameChange() {
    setFirstName(event.target.value);
  }
  function handlelNameChange() {
    setLastName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          value={fName}
          type="text"
          onChange={handlefNameChange}
          placeholder="First Name"
        />
        <input
          value={lName}
          type="text"
          onChange={handlelNameChange}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
