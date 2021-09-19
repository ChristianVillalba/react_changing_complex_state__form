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
      console.log(prevValue);
    });
  }

  return (
    <div className="container">
      <h1>
        {/* Hello, {fName} {lName}
        Updated to: */}
        Hello, {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          // value={fullName.fName}
          type="text"
          onChange={handleNameChange}
          placeholder="First Name"
        />
        <input
          name="lName"
          // value={fullName.lName}
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
