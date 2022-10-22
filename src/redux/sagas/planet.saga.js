import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* planetSaga() {
    yield takeLatest('FETCH_PLANET_LIST', fetchAllPlanets);
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

export default planetSaga;