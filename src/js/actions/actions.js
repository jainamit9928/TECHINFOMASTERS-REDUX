import * as types from '../constants/constants.js'

export const getDataSuccess = (data) => ({type:types.GET_DATA_SUCCESS, data}) 
export const getDataFailure = (message) => ({type:types.GET_DATA_FAILURE, message})   
export const getDataRequest = () => ({type:types.GET_DATA_REQUEST})   
export const updateDataSuccess = (data) => ({type:types.UPDATE_DATA_SUCCESS, data}) 
export const updatDataFailure = (message) => ({type:types.UPDATE_DATA_FAILURE, message})   
export const updatDataRequest = (id, updatedObj) => ({type:types.UPDATE_DATA_REQUEST, id, updatedObj})
export const setSearchKey = (searchKey) => ({type:types.SET_SEARCH_KEY, searchKey})
export const clearSearchKey = () => ({type:types.CLEAR_SEARCH_KEY})
export const getFilteredDataSuccess = (data) => ({type:types.GET_FILTERDDATA_SUCCESS, data}) 
export const getFilteredDataFailure = (message) => ({type:types.GET_FILTERDDATA_FAILURE, message})   
export const getFilteredDataRequest = (id) => ({type:types.GET_FILTERDDATA_REQUEST, id})

