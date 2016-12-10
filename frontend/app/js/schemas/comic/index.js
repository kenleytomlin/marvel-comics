import { normalize, arrayOf, Schema } from 'normalizr'

const comic = new Schema('comic')

export const receiveAll = (response) => normalize(response,{ results: arrayOf(comic) })

