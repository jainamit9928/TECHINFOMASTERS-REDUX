import React from 'react';
import * as types from '../src/js/constants/constants';
import * as actionTypes from '../src/js/actions/actions';
import * as sagaMethods from '../src/js/sagas/saga'
import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import { getData, getFilteredData, updateData } from '../src/js/apis/api'


describe('testing Saga', () => {


    describe('asyncActions:-fetchData method when success', () => {
        const  it = sagaHelper(sagaMethods.fetchData());
        const  expectedAction = () => actionTypes.getDataSuccess(undefined);
        it('should have called the api first', (result) => {
            expect(result).toEqual(call(getData));
        });
        it('and then trigger an action', (result) => {
            expect(result).toEqual(put(expectedAction()));
        });
        it('and then nothing', result => {
            expect(result).toBeUndefined();
        });
    });
    describe('asyncActions:-fetchData method when failed', () => {
        const  it = sagaHelper(sagaMethods.fetchData());
        const expectedActionFailed = () => actionTypes.getDataFailure('Something went wrong')
        it('should have called the api first', (result) => {
            expect(result).toEqual(call(getData));
            return new Error('Something went wrong');
        });
        it('and then trigger an action', (result) => {
            expect(result).toEqual(put(expectedActionFailed()));
        });
        it('and then nothing', result => {
            expect(result).toBeUndefined();
        });
    });
    describe('asyncActions:-fetchFilteredData method when success', () => {

        it('get filtered data', () => {
            const generator = sagaMethods.fetchFilteredData(actionTypes.getFilteredDataRequest(undefined))
            const  expectedAction = () => actionTypes.getFilteredDataSuccess(undefined)
            expect(
                generator.next().value
            ).toEqual(
                call(getFilteredData, undefined)
                );
            let fakeResponseBody = { token: 'some-token' };

            expect(
                generator.next().value
            ).toEqual(
                put(expectedAction())
                );

            expect(
                generator.next().done
            ).toBeTruthy();

        });
        it('throws when a call to api.fetchFilteredData fails', () => {

            const generator = sagaMethods.fetchFilteredData(actionTypes.getFilteredDataRequest(undefined))
            const expectedActionFailed = () => actionTypes.getFilteredDataFailure(undefined)
            expect(
                generator.next().value
            ).toEqual(
                call(getFilteredData, undefined)
                );
            expect(
                generator.throw("failed").value
            ).toEqual(
                put(expectedActionFailed())
                );
            expect(
                generator.next().done
            ).toBeTruthy();

        });

    });
    describe('asyncActions:-udapteData method when success', () => {
        const  it = sagaHelper(sagaMethods.updateFilteredData(actionTypes.updatDataRequest(123, {})));
        const  expectedAction = () => actionTypes.updateDataSuccess(undefined);
        it('should have called the api first', (result) => {
            expect(result).toEqual(call(updateData, 123, {}));
            return new Object();
        });
        it('and then trigger an action will throw undefined as responce itself undefined and we cant find data of responce(res.data)', (result) => {
            expect(result).toEqual(put(expectedAction()));
        });
        it('and then nothing', result => {
            expect(result).toBeUndefined();
        });
    });
      describe('asyncActions:-updateData method when success', () => {
        const  it = sagaHelper(sagaMethods.updateFilteredData(actionTypes.updatDataRequest(undefined, undefined)));
        const  expectedAction = () => actionTypes.updatDataFailure('Something went wrong')
        it('should have called the api first', (result) => {
            expect(result).toEqual(call(updateData, undefined, undefined));
            return new Error('Something went wrong');
        });
        it('and then handles an error', (result) => {
            expect(result).toEqual(put(expectedAction()));
        });
        it('and then nothing', result => {
            expect(result).toBeUndefined();
        });
    });

});