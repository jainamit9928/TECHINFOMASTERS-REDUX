import React from 'react'
import Loader from 'react-loader'
import { LOADER_OPTIONS } from '../constants/constants'
import ErrorComponent from './showerror.component'
import TechieDetails from './techiedetails.component'
import PropTypes from 'prop-types'

 class DetailsComponent extends React.Component {
  
    componentDidMount() {
         this.props.actions.getFilteredDataRequest(this.props.match.params.id);
    }
    render() {
        return (
              <Loader loaded={ !this.props.isFetching } className='spinner' options={ LOADER_OPTIONS }>
              <ErrorComponent className='error' dataNotFetched={ !Object.keys(this.props.filteredTechie).length > 0 } errorMessage={ this.props.errorMessage }/>
                {
                   Object.keys(this.props.filteredTechie).length > 0 && <TechieDetails params={ this.props.match.params.id } isFetching={ this.props.isFetching } filteredTechie={ this.props.filteredTechie } actions={ this.props.actions }/>
                }
            </Loader>
        )
    }
}
DetailsComponent.propTypes = {
    actions:PropTypes.object.isRequired,
    match:PropTypes.object.isRequired,
    errorMessage: PropTypes.string,
    filteredTechie:PropTypes.object.isRequired,
    isFetching:PropTypes.bool.isRequired,
};
export default DetailsComponent
