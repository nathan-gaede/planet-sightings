import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function PlanetDetail() {
    const planet = useSelector(store => store.planet.planetToDisplay);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_PLANET_DETAILS', payload: id});
    }, [id])
    return (
        <div>
            <h2>{id}</h2>
           {JSON.stringify(planet.data)}
            
            
        </div>
    )
}

export default PlanetDetail;