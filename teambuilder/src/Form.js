import React, { useState } from "react";

const Form = () => {
  const [teamMembers, setTeamMembers] = useState({
    name: "",
    email: "",
    role: ""
  });

  const submitHandler = e => {
    e.preventDefault();
    e.target.reset();
    console.log(teamMembers);
  };

  const changeHandler = e => {
    setTeamMembers({
      ...teamMembers,
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
            value={teamMembers.name}
            onChange={changeHandler}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="text"
            placeholder="Enter Email Here"
            value={teamMembers.email}
            onChange={changeHandler}
          />
        </label>
        <label>
          Role:
          <input
            name="role"
            type="text"
            placeholder="Enter Role Here"
            value={teamMembers.role}
            onChange={changeHandler}
          />
        </label>
        <button onSubmit={submitHandler}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
