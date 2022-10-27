import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* planetSaga() {
    yield takeLatest('FETCH_PLANET_LIST', fetchAllPlanets);
    yield takeLatest('FETCH_PLANET_DETAILS', fetchPlanetDetails);
    yield takeLatest('LOG_PLANET_SIGHTING', logPlanetSighting);
    yield takeLatest('DELETE_LOG_ENTRY', entryToDelete);
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

function* fetchPlanetDetails(action) {
    try {
        console.log(action.payload.id);
        const planet = yield axios.get(`/api/planets/${action.payload}`);
        console.log('get detail', planet.data);
        yield put ({ type: 'SET_PLANET_DETAILS', payload: planet.data });
    }catch {
        console.log('get details error');
    }
}

function* logPlanetSighting(action) {
    try {
        yield axios.post('/api/planets',action.payload)
        console.log(action.payload);
    }catch(e) {
        console.log(e);
        alert('Something went wrong POST')
    }
}

function* entryToDelete(action) {
    try {
        yield axios.delete(`/api/planets/${action.payload}`);
        console.log(action.payload);
        //This next line might be, 'FETCH_SIGHTING_DETAILS'
        // yield put ({ type: 'FETCH_PLANET_DETAILS'});
    }catch(e) {
        console.log(e);
        alert('Something went wrong DELETE')
    }
}

export default planetSaga;