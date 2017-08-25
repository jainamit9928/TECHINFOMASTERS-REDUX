import React from 'react'
import InputSearch from './inputsearch.component'
import VisibleTechieList from './visibletechielist.component'
import Loader from 'react-loader'
import { LOADER_OPTIONS } from '../constants/constants'
import PropTypes from 'prop-types'

class SearchComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.manipulateSearchKey = this.manipulateSearchKey.bind(this)
    }
    componentDidMount() {
        this.manipulateSearchKey()
    }
    manipulateSearchKey() {
        this.props.actions.clearSearchKey();
        this.props.match.params.id &&
            this.props.actions.setSearchKey(this.props.match.params.id)
        !this.props.techies.length > 0 &&
            this.props.actions.getDataRequest()
    }
    render() {
        return (
            <Loader loaded={!this.props.isFetching} className='spinner' options={LOADER_OPTIONS}>
                {
                    this.props.techies.length > 0 &&
                    (<div className='component-block'>
                        <div className='col-md-12'>
                            <InputSearch setSearchKey={this.props.actions.setSearchKey} searchKey={this.props.searchKey} clearSearchKey={this.props.actions.clearSearchKey} />
                            <VisibleTechieList queryParam={this.props.searchKey} visibleTechies={this.props.visibleTechies} params={this.props.match.params} />
                        </div>
                    </div>)
                }
            </Loader>
        )
    }
}
SearchComponent.propTypes = {
    actions: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    techies: PropTypes.array.isRequired,
    visibleTechies: PropTypes.array.isRequired,
    searchKey: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
}
export default SearchComponent
