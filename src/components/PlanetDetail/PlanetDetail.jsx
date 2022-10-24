import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { actionChannel } from '@redux-saga/core/effects';

function PlanetDetail() {
    const planet = useSelector(store => store.planet.selectedPlanet);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_PLANET_DETAILS', payload: id});
    }, [id])
    return (
        <div>
            <h2>{planet.name}</h2>
            <h2>Planet Type: {planet.description}</h2>
            <img src={planet.planet_image}/>
            <h2>Kilometers from Sun: {planet.distance_from_sun}</h2>
            <h2>Known Moons: {planet.known_moons}</h2>
            <h2>Visible without Telescope: {planet.visible_without_telescope}</h2>
            <h2>Minutes from Earth at Speed of Light: {planet.travel_time_speed_of_light_minutes}</h2>
            <h2>Time Required to Drive in Years: {planet.travel_time_driving_years}</h2>
           
            
            
        </div>
    )
}

export default PlanetDetail;