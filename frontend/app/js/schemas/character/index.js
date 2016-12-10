import { normalize, arrayOf, Schema } from 'normalizr'

const character = new Schema('character')

export const receiveAll = (response) => normalize(response,{ results: arrayOf(character) })

