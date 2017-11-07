import { types } from './propertySearchActions';

const defaultState = {
    results: [],
    noResults: true,
    pending: false,
    st: '',
    city: '',
    zip: null
};

export default function propertySearchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case ('GET_PROPERTIES_BY_STATE_FULFILLED'): {
            if(payload) {
                return {
                    ...state,
                    results: payload,
                    noResults: false,
                    pending: false,
                    st: ''
                };
            } else {
                return {
                    ...state,
                    noResults: true,
                    pending: false,
                    results: [],
                    st: ''
                }
            }
            break;
        }

        case (types.GET_PROPERTIES_BY_STATE + '_PENDING'): {
            return {
                ...state,
                pending: true
            }
            break;
        }

        case (types.GET_PROPERTIES_BY_STATE + '_REJECTED'): {
            return {
                ...state,
                pending: false,
                noResults: true,
                st: ''
            }
            break;
        }

        case (types.UPDATE_STATE): {
            return {
                ...state,
                st: payload.input
            }
            break;
        }

        case (types.UPDATE_CITY): {
            return {
                ...state,
                city: payload.input
            }
            break;
        }

        case (types.UPDATE_ZIP): {
            return {
                ...state,
                zip: payload.input
            }
            break;
        }

        default: {
            return state
        }
    }
}