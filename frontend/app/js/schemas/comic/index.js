import { normalize, schema } from 'normalizr'

const comic = new schema.Entity('comic')

export const receiveAll = (response) => normalize(response,{ results: [comic] })

