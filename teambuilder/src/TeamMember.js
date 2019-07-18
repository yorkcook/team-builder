import React from "react";

const TeamMember = props => {
  return (
    <div>
      <h2>{props.member.name}</h2>
      <ul>
        <li>{props.member.email}</li>
        <li>{props.member.role}</li>
      </ul>
      <button
        onClick={() => {
          console.log("test");
          props.editMember(props.member);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default TeamMember;
