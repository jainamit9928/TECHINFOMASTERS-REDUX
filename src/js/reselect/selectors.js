import { createSelector } from 'reselect'
import _ from 'lodash'

// selector
const getTechies = (state) => state.techies.techies
const getSearchTerm = (state, props) => props.match.params.id

// reselect function
export const makeGetTechiesState = () => createSelector(
  [getTechies],
  (techies) => techies
)

export const makeGetVisibleTechies = () => createSelector(
  [getTechies, getSearchTerm],
  (techies, searchTerm) => _.filter(techies, (techie) => (techie.name.toLowerCase().includes(searchTerm)))
)
