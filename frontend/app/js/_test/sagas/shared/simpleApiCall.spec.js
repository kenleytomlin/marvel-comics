import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import simpleApiCall, { request } from '../../../sagas/shared/simpleApiCall'

const setup = (method='get') => {
  const pathname = '/v1/comics'
  const REQUEST_ACTION = () => { return { type: 'REQUEST_ACTION', payload: { pathname,  params: {}, method: 'get'} } }
  const SUCCESS_ACTION = () => { return { type: 'SUCCESS_ACTION', payload: {} } }
  const FAILURE_ACTION = () => { return { type: 'FAILURE_ACTION', payload: {} } }

  const actions = [SUCCESS_ACTION,FAILURE_ACTION]

  return {
    method,
    pathname,
    REQUEST_ACTION,
    SUCCESS_ACTION,
    FAILURE_ACTION,
    actions
  }
}

describe('sagas',() => {
  describe('shared/simpleApiCall',() => {
    context('when the request is a success',() => {
      it('returns the required effects',() => {
        const { method, actions, pathname, REQUEST_ACTION, SUCCESS_ACTION, FAILURE_ACTION } = setup()
        const action = REQUEST_ACTION()
        const iterator = request(actions,action)
        const response = { data: {} }

        expect(iterator.next().value).toEqual(call(axios.get,`http://api:8080${pathname}`,{ params: action.payload.params }))
        expect(iterator.next(response).value).toEqual(put(SUCCESS_ACTION(response)))
      })
    })

    context('when the request is a failure',() => {
      it('returns the required effects',() => {
        const { method, actions, pathname, REQUEST_ACTION, SUCCESS_ACTION, FAILURE_ACTION } = setup()
        const action = REQUEST_ACTION()
        const iterator = request(actions,action)
        const error = new Error('')

        expect(iterator.next({ data: {} }).value).toEqual(call(axios.get,`http://api:8080${pathname}`,{ params: action.payload.params }))
        expect(iterator.throw(error).value).toEqual(put(FAILURE_ACTION(error)))
      })
    })

    context('when the correct arguments are passed',() => {
      it('returns a function',() => {
        const { method, actions, REQUEST_ACTION, SUCCESS_ACTION, FAILURE_ACTION } = setup()
        expect(simpleApiCall(REQUEST_ACTION,actions)).toBeA(Function)
      })
    })

    context('when incorrect arguments are passed',() => {
      it('throws an error',() => {
        expect(()=> simpleApiCall()).toThrow('Bad arguments passed to simpleApiCall saga, you must pass a type to listen for and the actions to call on success and failure')
      })
    })
  })
})

