import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

function TechList() {
  const [newTech, setNewTech] = useState("");

  const dispach = useDispatch();
  const techs = useSelector(state => state.techs);
 
  function handleAddTech() {
    dispach({type: "ADD_TECH", payload: {tech: newTech}});
    setNewTech("");
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech} > 
      <ul data-testid="tech-list">
        {techs.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input  
        id="tech"
        value={newTech}
        onChange={(event) => setNewTech(event.target.value)}
      />
      
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TechList;