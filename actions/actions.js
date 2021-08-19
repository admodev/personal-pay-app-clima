export const GET_ACTUAL_WEATHER = 'GET_ACTUAL_WEATHER';
export const UPDATE_ACTUAL_WEATHER = 'UPDATE_ACTUAL_WEATHER';
export const STORE_WEATHER = 'STORE_WEATHER';

export function getActualWeather(city) {
    return {
        type: GET_ACTUAL_WEATHER,
        city
    };
}

export function storeWeather(weather, json) {
    return {
        type: STORE_WEATHER,
        weather,
        posts: json.data.children.map((child) => child.data)
    };
}

export function updateActualWeather(weather) {
    return (dispatch) => {
        dispatch(getActualWeather(weather));
        return fetch(`http://localhost:4500/v1/api/current`)
            .then((response) => response.json())
            .then((json) => dispatch(storeWeather(weather, json)));
    };
}
