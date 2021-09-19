import React, { useState } from "react";

function App() {
  // const [fName, setFirstName] = useState("");
  // const [lName, setLastName] = useState("");
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  // function handleNameChange() {
  //   setFirstName(event.target.value);
  // }
  // function handlelNameChange(event) {
  //   setLastName(event.target.value);
  // }
  function handleNameChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      {/* Hello, {fName} {lName}
        Updated to: */}
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          value={fullName.fName}
          type="text"
          onChange={handleNameChange}
          placeholder="First Name"
        />
        <input
          name="lName"
          value={fullName.lName}
          type="text"
          onChange={handleNameChange}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
