import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function PlanetList() {
    const planetList = useSelector(store => store.planet.planetList);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect (() => {
        dispatch ({ type: 'FETCH_PLANET_LIST' });
    }, []);

    const displayDetails = (planetToDisplay) => {
        //can remove the next two lines of code once 
        //the useEffect on the PlanetDetail is working.
        // console.log('fetch',planetToDisplay);
        // dispatch ({ type: 'FETCH_PLANET_DETAILS', payload: planetToDisplay });
        history.push(`/detail/${planetToDisplay.id}`);
        
    };


return (
   <>
        <h1>Planet List</h1>
            <h2>Click Image For More Detail</h2>
        {  planetList.map(planet => {
            return (<div key={ planet.id }>
              <h2>  { planet.name} </h2>
                <img onClick={(e) => displayDetails(planet) }src={planet.planet_image} width="300" height="300" alt={planet.name} />
         {/* {JSON.stringify(planetList)} */}
        </div>
     
        );
})}
        
        </>   
)    

    
}
export default PlanetList;