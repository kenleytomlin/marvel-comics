import { normalize, schema } from 'normalizr'

const character = new schema.Entity('character')

export const receiveAll = (response) => normalize(response,{ results: [character] })

