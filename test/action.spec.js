import React from 'react';
import * as types from '../src/js/constants/constants';
import * as actionTypes from '../src/js/actions/actions';

describe('actions', () => {
    it('should create an action for search key', () => {
        const searchKeyTest = 'joh';
        const expectedAction = {
            type: types.SET_SEARCH_KEY,
           searchKey:searchKeyTest
        };
        expect(actionTypes.setSearchKey(searchKeyTest)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for getDataSuccess', () => {
        const json = {};
        const expectedAction = {
            type: types.GET_DATA_SUCCESS,
            data : json
        };
        expect(actionTypes.getDataSuccess(json)).toEqual(expectedAction)
    })
});
describe('actions', () => {
    it('should create an action for getDataFailure', () => {
        const message = "failed"
        const expectedAction = {
            type: types.GET_DATA_FAILURE,
            message : message
        };
        expect(actionTypes.getDataFailure(message)).toEqual(expectedAction)
    })
});
describe('actions', () => {
    it('should create an action for getDataRequest', () => {
        const expectedAction = {
            type: types.GET_DATA_REQUEST
        };
        expect(actionTypes.getDataRequest()).toEqual(expectedAction)
    })
});
describe('actions', () => {
    it('should create an action for getFilteredDataSuccess', () => {
        const json = {};
        const expectedAction = {
            type: types.GET_FILTERDDATA_SUCCESS,
            data : json
        };
        expect(actionTypes.getFilteredDataSuccess(json)).toEqual(expectedAction)
    })
});
describe('actions', () => {
    it('should create an action for getFilteredDataFailure', () => {
        const message = "failed"
        const expectedAction = {
            type: types.GET_FILTERDDATA_FAILURE,
            message : message
        };
        expect(actionTypes.getFilteredDataFailure(message)).toEqual(expectedAction)
    })
});
describe('actions', () => {
    it('should create an action for getFilteredDataRequest', () => {
        const expectedAction = {
            type: types.GET_FILTERDDATA_REQUEST
        };
        expect(actionTypes.getFilteredDataRequest()).toEqual(expectedAction)
    })
});
describe('actions', () => {
    it('should create an action for updateDataSuccess', () => {
        const json = {};
        const expectedAction = {
            type: types.UPDATE_DATA_SUCCESS,
            data : json
        };
        expect(actionTypes.updateDataSuccess(json)).toEqual(expectedAction)
    })
});
describe('actions', () => {
    it('should create an action for updateDataFailure', () => {
        const message = "failed"
        const expectedAction = {
            type: types.UPDATE_DATA_FAILURE,
            message : message
        };
        expect(actionTypes.updatDataFailure(message)).toEqual(expectedAction)
    })
});
describe('actions', () => {
    it('should create an action for updateDataRequest', () => {
        let id = "123",
        data ={}
        const expectedAction = {
            type: types.UPDATE_DATA_REQUEST,
            updatedObj:data,
            id:id
        };
        expect(actionTypes.updatDataRequest(id,data)).toEqual(expectedAction)
    })
});
describe('actions', () => {
    it('should create an action for clearSearchKey', () => {
        const expectedAction = {
            type: types.CLEAR_SEARCH_KEY
        };
        expect(actionTypes.clearSearchKey()).toEqual(expectedAction)
    })
});
