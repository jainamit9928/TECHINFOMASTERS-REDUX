import * as actionTypes from '../constants/constants.js'

export const techies = (state = { techies: [], isFetching: false, errorMessage: '' }, action) => {
    switch (action.type) {

        case actionTypes.GET_DATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            }
            );

        case actionTypes.GET_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                techies: action.data,
            }
            );

        case actionTypes.GET_DATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            })

        default:
            return state;
    }
}
export const details = (state = { filteredTechie: {}, isFetching: false, errorMessage: '' }, action) => {
    switch (action.type) {

        case actionTypes.GET_FILTERDDATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            }
            )

        case actionTypes.GET_FILTERDDATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                filteredTechie: action.data,
            }
            )

        case actionTypes.GET_FILTERDDATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            })

        case actionTypes.UPDATE_DATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            }
            )

        case actionTypes.UPDATE_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                filteredTechie: action.data,
            }
            )

        case actionTypes.UPDATE_DATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            })

        default:
            return state;
    }
}
export const search = (state = { searchKey: '' }, action) => {
    switch (action.type) {

        case actionTypes.SET_SEARCH_KEY:
            return Object.assign({}, state, {
                searchKey: action.searchKey,
            }
            )

        case actionTypes.CLEAR_SEARCH_KEY:
            return Object.assign({}, state, {
                searchKey: '',
            }
            )

        default:
            return state;
    }
}
