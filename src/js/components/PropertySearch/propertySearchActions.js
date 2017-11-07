import axios from 'axios';

export const types = {
    GET_PROPERTIES_BY_STATE: 'GET_PROPERTIES_BY_STATE',
    GET_PROPERTIES_BY_ZIP: 'GET_PROPERTIES_BY_ZIP',
    GET_PROPERTIES_BY_CITY: 'GET_PROPERTIES_BY_CITY',
    UPDATE_STATE: 'UPDATE_STATE',
    UPDATE_CITY: 'UPDATE_CITY',
    UPDATE_ZIP: 'UPDATE_ZIP'
};

export function getPropertiesByState (state) {
    return {
        type: types.GET_PROPERTIES_BY_STATE,
        payload: axios.get('http://localhost:8000/api/properties/state/' + state)
            .then(results => {
                console.log(results);
                return results;
            })
            .catch(err => console.log(err))
    }
}

export function updateState (input) {
    return {
        type: types.UPDATE_STATE,
        payload: { input }
    }
}

export function updateCity (input) {
    return {
        type: types.UPDATE_CITY,
        payload: { input }
    }
}

export function updateZip (input) {
    return {
        type: types.UPDATE_ZIP,
        payload: { input }
    }
}
