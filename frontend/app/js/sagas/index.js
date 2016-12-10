import { characterRootSaga } from './character'
import { comicRootSaga } from './comic'
import { fork } from 'redux-saga/effects'

export default function* () {
  yield fork(characterRootSaga)
  yield fork(comicRootSaga)
}
