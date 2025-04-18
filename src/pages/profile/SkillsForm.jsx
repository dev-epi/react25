import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../../services/axiosInstance';
import { UserContext } from '../../services/UserContext';

export default function SkillsForm() {
    const [items , setItems] = useState([]);
    const [newSkill , setNewSkill] = useState();
    let {test , addSkills} = useContext(UserContext)
    useEffect(()=>{
        axiosInstance.get('/skills')
        .then(data=>setItems(data))
    },[])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(newSkill)
       addSkills(items.find(x => x._id == newSkill))
       test()
    }
  return (
    <form onSubmit={handleSubmit}>
    <div className="input-group" style={{marginBottom: '10px'}}>
      <select onChange={(e)=>setNewSkill(e.target.value)}>
        <option value="">-- Select a skill --</option>
        { items.map((item,index)=><option key={index} value={item._id}>{item.name}</option>)}
      </select>
    </div>
    { newSkill && <button className="btn btn-primary" type="submit">Add Skill</button>}
  </form>
  )
}
