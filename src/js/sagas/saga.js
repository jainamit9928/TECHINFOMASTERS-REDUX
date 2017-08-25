import { call, put, takeEvery, all, take, race, select } from 'redux-saga/effects'
import * as actionTypes from '../constants/constants.js'
import { getData, getFilteredData, updateData } from '../apis/api'
import * as actions from '../actions/actions'
import 'regenerator-runtime/runtime'

export function* fetchData() {
  try {
    //yield put(actions.showLoading(true))

    const data = yield call(getData)
    // if data then succesds action
    
    yield put(actions.getDataSuccess(data))
  } catch (error) {
    yield put(actions.getDataFailure(error.message))
  }finally {
    // yield put(actions.showLoading(false))
  }

}

export function* fetchFilteredData(action) {
  try {
    //yield put(actions.showLoading(true))
    const data = yield call(getFilteredData, action.id)
    // if data then succesds action
    yield put(actions.getFilteredDataSuccess(data))

  } catch (error) {
    yield put(actions.getFilteredDataFailure(error.message))
  }finally {
    // yield put(actions.showLoading(false))
  }
}

export function* updateFilteredData(action){
  try {
    //yield put(actions.showLoading(true))
    const res = yield call(updateData, action.id, action.updatedObj)
    // if data then succesds action
    if(res){
       yield put(actions.updateDataSuccess(res.data))
    }
  } catch (error) {
    yield put(actions.updatDataFailure(error.message))
  }finally {
    // yield put(actions.showLoading(false))
  }
}
//backgroundTask
export function* watchAndLog() {
  while (true) {
    yield take('*')
    yield select()
  }
}

export function* watchStartBackgroundTask() {
  while (true) {
    yield take('*')
    yield race({
      task: call(watchAndLog),
      cancel: take('CANCEL_TASK'),
    })
  }
}
export function* watchFetchAsync() {
  yield takeEvery(actionTypes.GET_DATA_REQUEST, fetchData)
  yield takeEvery(actionTypes.GET_FILTERDDATA_REQUEST, fetchFilteredData)
  yield takeEvery(actionTypes.UPDATE_DATA_REQUEST, updateFilteredData)
}

export function* rootSaga() {
  yield all([watchFetchAsync(), watchStartBackgroundTask()])
}
