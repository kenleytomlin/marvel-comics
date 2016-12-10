import { createSelector } from 'reselect'
import { includes, chunk } from 'lodash'

export const getComicIds = state => chunk(state.comics.ids,4)

export const getComicIsFetching = state => state.comics.isFetching

export const getComicById = (state,id) => state.comics && state.comics.comics && state.comics.comics[id] ? state.comics.comics[id] : undefined

export const getComicVoted = state => state.comics.voted

export const getComicThumbnail = createSelector(
  getComicById,
  (comic) => {
    if(comic)
      return `${comic.thumbnail.path}.${comic.thumbnail.extension}`
    else
      return ''
  }
)

export const getComicIsUpvoted = createSelector(
  getComicById,
  getComicVoted,
  (comic,voted) => includes(voted,comic.id)
)

export const getComicPagination = state => state.comics.pagination

