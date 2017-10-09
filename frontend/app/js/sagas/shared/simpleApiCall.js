import process from 'process'
import { isArray } from 'lodash'
import { put, call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import axios from 'axios'

export const request = function* (actions,action) {
  const [SUCCESS_ACTION,FAILURE_ACTION] = actions
  const { payload } = action
  const pathname = process.browser ? payload.pathname : `http://${process.env.API_HOST}:${process.env.API_PORT}${payload.pathname}`
  try {
    const response  = yield call(axios[payload.method],pathname,{ params: payload.params })
    yield put(SUCCESS_ACTION(response.data))

  } catch(error) {
    yield put(FAILURE_ACTION(error))
  }
}

const simpleApiCall = (REQUEST_TYPE,actions) => {
  if(!REQUEST_TYPE || !actions || !isArray(actions)) {
    throw new Error('Bad arguments passed to simpleApiCall saga, you must pass a type to listen for and the actions to call on success and failure')
  } else {
    return function* saga() {
      yield takeLatest(REQUEST_TYPE,request,actions)
    }
  }
}

export default simpleApiCall

