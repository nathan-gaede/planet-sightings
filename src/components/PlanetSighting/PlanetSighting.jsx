import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import './PlanetSighting.css';


function PlanetSighting() {
    console.log('in Sighting');
    const history = useHistory();
    const dispatch = useDispatch();
    // const { id } = useParams();

    //getter and setter here using state
    const [logDetails, setLogDetails]=useState('');
    //This may not be needed at all.
    const entryToDelete = useSelector(store => store.planet.entryToDelete);
    const planet = useSelector(store => store.planet.selectedPlanet);
    

    const deleteEntry= (event) => {
        console.log('in deleteEntry');
        console.log(entryToDelete);
        dispatch ({ type: 'DELETE_LOG_ENTRY', payload: entryToDelete})
    }
    const LogSighting=() => {
        console.log('What the heck is',logDetails);
        dispatch ({ type: 'LOG_PLANET_SIGHTING', payload: {notes:logDetails, planet_id:planet.id}});

        history.goBack();
    };



return (
    
       
    <div>
        <h2 id="sighting-header">Log Sighting Page</h2>

        <input value={logDetails} onChange={ (e) =>setLogDetails(e.target.value)}placeholder="sighting notes"></input>
        <button onClick={LogSighting}>Log Planet Sighting</button>

        <button onClick={(event) => deleteEntry(entryToDelete)}>Delete Entry</button>
        <button>Edit Entry</button>

    </div>
    
    
)

}





export default PlanetSighting;