import React, { useState } from "react";

const Form = props => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: ""
  });

  const submitHandler = e => {
    e.preventDefault();
    props.setTeam([...props.team, formState]);
    e.target.reset();
    console.log(formState);
  };

  const changeHandler = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={submitHandler}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            placeholder="Enter Name Here"
            value={formState.name}
            onChange={changeHandler}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="text"
            placeholder="Enter Email Here"
            value={formState.email}
            onChange={changeHandler}
          />
        </label>
        <label>
          Role:
          <input
            name="role"
            type="text"
            placeholder="Enter Role Here"
            value={formState.role}
            onChange={changeHandler}
          />
        </label>
        <button onSubmit={submitHandler}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
