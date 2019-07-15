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
  return (
    <div className="App">
      <h1>TeamBuilder</h1>
      {team.map(member => {
        return <TeamMember member={member} key={member.name} />;
      })}
      <Form setTeam={setTeam} team={team} />
    </div>
  );
}

export default App;
