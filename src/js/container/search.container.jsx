import * as stateActions from '../actions/actions'
import { connect } from 'react-redux'
import SearchComponent from '../components/search.component'
import { bindActionCreators } from 'redux'
import { makeGetVisibleTechies } from '../reselect/selectors'

const makeMapStateToProps = () => {
      const getVisibleTechiesState = makeGetVisibleTechies()
      const mapStateToProps = (state, props) => {
        return {
        techies: state.techies.techies,
        searchKey: state.search.searchKey,
        errorMessage:state.techies.errorMessage,
        isFetching:state.techies.isFetching,
        visibleTechies:getVisibleTechiesState(state, props),
        }
  }
 return mapStateToProps
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators(stateActions, dispatch),
    }
}
const SearchContainer =connect(makeMapStateToProps, mapDispatchToProps)(SearchComponent)
export default SearchContainer
