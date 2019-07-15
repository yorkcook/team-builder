import React, { useState, useEffect } from "react";

const Form = props => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: ""
  });

  //   const submitHandler = e => {
  //     e.preventDefault();
  //     props.setTeam([...props.team, formState]);
  //     e.target.reset();
  //     console.log(formState);
  //   };

  const submitHandler = e => {
    e.preventDefault();
    if (props.memberToEdit) {
      let updated = props.team.map(member => {
        if (member.indexNumber === props.memberToEdit.indexNumber) {
          return formState;
        } else {
          return member;
        }
      });
      props.setTeam([...updated]);
    } else {
      props.setTeam([
        ...props.team,
        { ...formState, indexNumber: props.team.length }
      ]);
    }
  };

  const changeHandler = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (props.memberToEdit) {
      setFormState({
        name: props.memberToEdit.name,
        email: props.memberToEdit.email,
        role: props.memberToEdit.role
      });
    }
  }, [props.memberToEdit]);

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
