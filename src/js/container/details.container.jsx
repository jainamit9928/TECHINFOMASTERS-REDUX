import * as stateActions from '../actions/actions'
import { connect } from 'react-redux'
import DetailsComponent from '../components/details.component'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
 return{
     filteredTechie:state.details.filteredTechie,
     isFetching:state.details.isFetching,
     errorMessage:state.details.errorMessage,
 }
}

const mapDispatchToProps = (dispatch) => {
      return {
       actions:bindActionCreators(stateActions, dispatch),
    }
}

const DetailsContainer = connect(mapStateToProps, mapDispatchToProps)(DetailsComponent)
export default DetailsContainer
