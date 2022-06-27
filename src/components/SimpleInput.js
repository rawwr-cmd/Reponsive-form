import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
    // console.log(event);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(event);
    console.log(enteredName + " coming from state");
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue + " coming from ref");

    // nameInputRef.current.value = "";   //Not ideal, don't manipulate the DOM
    setEnteredName(""); //clearing the input after form submission using useState
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
