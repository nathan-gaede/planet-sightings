import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* planetSaga() {
    yield takeLatest('FETCH_PLANET_LIST', fetchAllPlanets);
    yield takeLatest('FETCH_PLANET_DETAILS', fetchPlanetDetails);
}

function* fetchAllPlanets() {
    try {
        const planets = yield axios.get('/api/planets');
        console.log('get all:', planets.data);
        yield put ({ type: 'SET_PLANETS', payload: planets.data });
    }catch {
        console.log('get error');
    }
}

function* fetchPlanetDetails(selectedPlanet) {
    try {
        console.log(selectedPlanet.payload.id);
        const planet = yield axios.get(`/api/planets/${selectedPlanet.payload.id}`);
        console.log('get detail', planet.data);
        yield put ({ type: 'SET_PLANET_DETAILS', payload: planet.data });
    }catch {
        console.log('get details error');
    }
}

export default planetSaga;