import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* planetSaga() {
    yield takeLatest('FETCH_PLANET_LIST', fetchAllPlanets);
    yield takeLatest('FETCH_PLANET_DETAILS', fetchPlanetDetails);
    yield takeLatest('LOG_PLANET_SIGHTING', logPlanetSighting);
    yield takeLatest('DELETE_LOG_ENTRY', entryToDelete);
    //Saga to fetch log details for the planet after sighting 
    //is logged. Display past view logs when history.goBack is
    //used to return to Planet Display.
    yield takeLatest('FETCH_LOG_ENTRIES', fetchLogEntries);
    yield takeLatest('FETCH_LOG_ENTRY', fetchLogEntry);
    yield takeLatest('EDIT_LOG_ENTRY', editLogEntry);
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
        console.log('What am I sending to POST?',action.payload);
    }catch(e) {
        console.log(e);
        alert('Something went wrong POST')
    }
}

function* fetchLogEntries(action) {
    try {
        const planetLogs = yield axios.get(`/api/planets/logs/${action.payload}`);
        yield put ({ type: 'SET_LOG_DETAILS', payload: planetLogs.data});
    }catch(e) {
        console.log('Fetch Log Error', e);
    }
}

function* entryToDelete(action) {
    try {
        console.log(action);
        yield axios.delete(`/api/planets/delete/${action.payload}`);
        console.log(action.payload);
        yield put ({ type: 'FETCH_LOG_ENTRIES', payload: action.planet.id});
    }catch(e) {
        console.log(e);
        alert('Something went wrong DELETE')
    }
}
function* fetchLogEntry(action) {
    try {
        console.log(action);
        yield axios.get(`/api/planets/log/${action.payload}`);
        console.log(action.payload);
        yield put ({ type: 'SET_LOG_DETAILS', payload: action.payload});
    }catch(e) {
        console.log(e);
        alert('Something went wrong fetching log')
    }
}

function* editLogEntry(action) {
    try {
        console.log('Testing Edit SAGA',action);
        yield axios.put(`/api/planets/edit/${action.payload}`,action.payload);
    }catch(e) {
        console.log(e);
        alert('Something went wrong with EDIT');
    }
}

export default planetSaga;