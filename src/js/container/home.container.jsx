import * as stateActions from '../actions/actions'
import { connect } from 'react-redux'
import Home from '../components/home.component'
import { bindActionCreators } from 'redux'
import { makeGetTechiesState } from '../reselect/selectors'

const makeMapStateToProps = () => {
     const getTechiesState = makeGetTechiesState()
     const mapStateToProps = (state, props) => {
         return {
            techies:getTechiesState(state, props),
            searchKey:state.search.searchKey,
            isFetching:state.techies.isFetching,
            errorMessage:state.techies.errorMessage,
        }
  }
 return mapStateToProps
}

const mapDispatchToProps = (dispatch) => {
      return {
       actions:bindActionCreators(stateActions, dispatch),
    }
}
const HomeContainer =connect(makeMapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer
