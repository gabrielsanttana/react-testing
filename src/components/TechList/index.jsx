import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import {addTech} from '../../store/modules/techs/actions';

function TechList() {
  const [newTech, setNewTech] = useState("");

  const dispatch = useDispatch();
  const techs = useSelector(state => state.techs);

  function addNewTech() {
    dispatch(addTech(newTech));
    
    setNewTech("");
  }

  return (
    <>
      <ul data-testid="tech-list">
        {techs.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
        
      </ul>

      <form data-testid="tech-form" onSubmit={addNewTech}>
        <label htmlFor="tech">Tech</label>
        <input id="tech" type="text" value={newTech} onChange={(event) => setNewTech(event.target.value)} />

        <button onClick={addNewTech}>Adicionar</button>
      </form>
    </>
  );
}

export default TechList;  