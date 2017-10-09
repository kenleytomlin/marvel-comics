import { characterRootSaga } from './character'
import { comicRootSaga } from './comic'
import { fork } from 'redux-saga/effects'

export default function* () {
  try {
    yield fork(characterRootSaga)
    yield fork(comicRootSaga)
  } catch (err) {
    console.log(err)
  }
}
