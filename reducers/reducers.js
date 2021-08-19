import { combineReducers } from 'redux';
import {
    GET_ACTUAL_WEATHER,
    UPDATE_ACTUAL_WEATHER,
    STORE_WEATHER
} from '../actions/actions';

function actualWeather(state = 'weather', action) {
    switch (action.type) {
        case GET_ACTUAL_WEATHER:
            return action.city;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    actualWeather
});

export default rootReducer;
