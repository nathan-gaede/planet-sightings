import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function PlanetList() {
    const planetList = useSelector(store => store.planet.planetList);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch ({ type: 'FETCH_PLANET_LIST' });
    }, []);


return (
    <>
        <h2>Planet List</h2>
        {/* //  planetList.map(planet => { */}
        {/* //     return (<div key={ planet.id }>{ planet.name }</div> */}
        {JSON.stringify(planetList)}
        </>   
        ) 
        

        

    
}
export default PlanetList;