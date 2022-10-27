import { combineReducers } from 'redux';

const planetList = (state = [], action) => {
    if(action.type === 'SET_PLANETS') {
        return action.payload;
    }
    return state;
}

const selectedPlanet = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PLANET_DETAILS':
            return action.payload;
            default:
                return state;
    }
}
//Repurpose this for saving single sighting detail & editing
const entryToDelete = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_LOG_ENTRY':
        return action.payload;
        default:
            return state;
    }
}


export default combineReducers({
    //when using useSelector, use store.planet.selectedPlanet
    planetList,
    selectedPlanet,
    entryToDelete,
});
