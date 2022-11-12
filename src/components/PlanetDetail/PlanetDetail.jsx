import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function PlanetDetail() {
    const planet = useSelector(store => store.planet.selectedPlanet);
    const planetLogs = useSelector(store => store.planet.logEntryList);
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_PLANET_DETAILS', payload: id });
        dispatch({ type: 'FETCH_LOG_ENTRIES', payload: id });
    }, [id])


    const LogSighting=() => {
        // dispatch ({ type: 'LOG_PLANET_SIGHTING', payload: planet.id});
        history.push('/sighting/');
    };
    return (
        <div>
            <h2>{planet.name}</h2>
            <h2>Planet Type: {planet.description}</h2>
            <img src={planet.planet_image}/>
            <h2>Kilometers from Sun: {planet.distance_from_sun}</h2>
            <h2>Known Moons: {planet.known_moons}</h2>
            <h2>Visible without Telescope: {planet.visible_without_telescope ? <span>true</span>: <span>false</span>}</h2>
            <h2>Minutes from Earth at Speed of Light: {planet.travel_time_speed_of_light_minutes}</h2>
            <h2>Time Required to Drive in Years: {planet.travel_time_driving_years}</h2>
            <button value={planet.id} onClick={() => LogSighting()}>Log Planet Sighting</button>
           {/* {JSON.stringify(planetLogs)}; */}
           
           <h2>Sighting Logs</h2>
           { planetLogs.map(tomato => {
            return (<div key= { tomato.log }>
                    <ul>
                        <li>Sighting Notes (if any): {tomato.notes}</li>
                        <li>Date & Time Sighted: {tomato.sighting_at}</li>
                        <button>Delete Log Entry</button>
                    </ul>
                
                </div>
                );
           })}
            
             
        </div>
    
    );
        }

export default PlanetDetail;