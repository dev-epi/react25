import React from "react";
import SkillsForm from "./SkillsForm";

export default function Skills({items = [] , addSkillsHandler}) {
  return (
    <div>
        <SkillsForm addSkills={addSkillsHandler}/>
      <ul  style={{ marginTop: "20px" }}>
         {items.map((item , index)=>{
            return <li key={index}>{item.name}</li>
         })
         }
      </ul>
    </div>
  );
}
