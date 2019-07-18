import React, { useState } from "react";

import "./App.css";

import Form from "./Form";
import TeamMember from "./TeamMember";

function App() {
  const [team, setTeam] = useState([
    {
      name: "Tom",
      email: "tom@email.com",
      role: "Front End"
    },
    {
      name: "Bob",
      email: "bob@email.com",
      role: "Back End"
    }
  ]);

  const [memberToEdit, setMemberToEdit] = useState("");

  const editMember = member => {
    setMemberToEdit(member);
  };

  return (
    <div className="App">
      <h1>TeamBuilder</h1>
      {team.map(member => {
        return (
          <TeamMember
            member={member}
            key={member.name}
            editMember={editMember}
          />
        );
      })}
      <Form setTeam={setTeam} team={team} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;
