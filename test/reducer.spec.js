import React from 'react';
import * as types from '../src/js/constants/constants';
import { techies, details, search} from '../src/js/reducers/reducer.js';


describe('search reducer', () => {

        it('set search key', () => {

        expect(search(undefined, { type:types.SET_SEARCH_KEY,searchKey : 'search-Term' })).toEqual( {
           searchKey: 'search-Term'
        })
       
    }),
     it('clear search key', () => {
        expect(search(undefined, { type:types.CLEAR_SEARCH_KEY })).toEqual( {
            searchKey: ''
        })
    })

})

describe('techies reducer', () => {
    
        it('get data request', () => {
        expect(techies(undefined, { type:types.GET_DATA_REQUEST })).toEqual( {
          isFetching: true,
          techies: [],
          errorMessage: ""
        })
       }),
        it('get data failed', () => {
        expect(techies(undefined, { type:types.GET_DATA_FAILURE,message:'failed' })).toEqual( {
          isFetching: false,
          techies: [],
          errorMessage: 'failed'
        })
       }),
         it('get data success', () => {
        expect(techies(undefined, { type:types.GET_DATA_SUCCESS,data:[{},{}] })).toEqual( {
          isFetching: false,
          techies: [{},{}],
          errorMessage: ''
        })
       })
  

})

describe('details reducer', () => {
    
        it('get filtered data request', () => {
        expect(details(undefined, { type:types.GET_FILTERDDATA_REQUEST })).toEqual( {
          isFetching: true,
          filteredTechie: {},
          errorMessage: ''
        })
       }),
        it('get filtered data failed', () => {
        expect(details(undefined, { type:types.GET_FILTERDDATA_FAILURE,message:'failed' })).toEqual( {
          isFetching: false,
          filteredTechie: {},
          errorMessage: 'failed'
        })
       }),
         it('get filteredTechie data success', () => {
        expect(details(undefined, { type:types.GET_FILTERDDATA_SUCCESS,data:{} })).toEqual( {
          isFetching: false,
          filteredTechie: {},
          errorMessage: ''
        })
       }),
        it('update techie data success', () => {
        expect(details(undefined, { type:types.UPDATE_DATA_SUCCESS,data:{} })).toEqual( {
          isFetching: false,
          filteredTechie: {},
          errorMessage: ''
        })
       }),
        it('update data failed', () => {
        expect(details(undefined, { type:types.UPDATE_DATA_FAILURE,message:'failed' })).toEqual( {
          isFetching: false,
          errorMessage: 'failed',
           filteredTechie: {},
        })
       }),
        it('update data request', () => {
        expect(details(undefined, { type:types.UPDATE_DATA_REQUEST })).toEqual( {
          isFetching: true,
          filteredTechie: {},
          errorMessage: ''
        })
       })
  

})
