import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import './PlanetSighting.css';


function PlanetSighting() {
    // console.log('in Sighting');
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();

    //getter and setter here using state
    const [logDetails, setLogDetails]=useState('');
    
    //This may not be needed at all.
    //const entryToDelete = useSelector(store => store.planet.entryToDelete);
    const planet = useSelector(store => store.planet.selectedPlanet);
    // const [recentLog, setRecentLog]=useState(planet);
    
    const LogSighting=() => {
        console.log('What the heck is',logDetails);
        dispatch ({ type: 'LOG_PLANET_SIGHTING', payload: {notes:logDetails, planet_id:planet.id}});

        history.goBack();
    };

    const EditSighting=() => {
        console.log('Edit sighting',id);
        dispatch ({ type: 'EDIT_LOG_ENTRY', payload: {notes:logDetails, planet_id:planet.id, id}});
        history.goBack();
    }

    useEffect(() => {
        // If an id exists, useEffect will...
        if (id) {
             axios.get(`/api/planets/log/${ id }`).then(response => {
                 const log = response.data;
                 console.log('Axios fetch',log[0]);
                 //response.data is an array with one entry
                 //using [0] pulls the first and only entry 
                 //in the array. The entry has a property 
                 //called notes. 
                 setLogDetails(log[0].notes)
             }).catch(error => { 
                console.log(error)
                alert('Something went wrong fetching single log');
             })
         }
        }, [id]);



return (
    
       
    <div>
        <h2 id="sighting-header">Log Sighting Page</h2>

        <input value={logDetails} onChange={ (e) =>setLogDetails(e.target.value)}placeholder="sighting notes"></input>
        {id ? <button onClick={EditSighting}>Edit Note</button> :
        <button onClick={LogSighting}>Submit</button>}


    </div>
    
    
)

}





export default PlanetSighting;