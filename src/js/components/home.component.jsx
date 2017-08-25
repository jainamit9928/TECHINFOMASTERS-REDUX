import React from 'react'
import Techie from './techie.component'
import InputSearch from './inputsearch.component'
import ErrorComponent from './showerror.component'
import { LOADER_OPTIONS } from '../constants/constants'
import Loader from 'react-loader'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default class Home extends React.PureComponent {

    componentDidMount() {
        this.props.actions.getDataRequest();
        this.props.actions.clearSearchKey();
    }

    render() {
        return (
            <Loader loaded={!this.props.isFetching} className='spinner' options={LOADER_OPTIONS}>
                <div className='component-block'>
                    {<ErrorComponent className='error' errorMessage={this.props.errorMessage} dataNotFetched={!this.props.techies.length > 0} />}
                    {this.props.techies.length > 0 && (
                        <div className='col-md-12'>
                            <InputSearch setSearchKey={this.props.actions.setSearchKey} searchKey={this.props.searchKey} clearSearchKey={this.props.actions.clearSearchKey} />
                            {
                                _.map(this.props.techies, (techie) => (
                                    <Techie key={techie.id} techie={techie} />
                                ))
                            }
                        </div>
                    )
                    }
                </div>
            </Loader>
        )
    }
}

Home.propTypes = {
    actions: PropTypes.object.isRequired,
    errorMessage: PropTypes.string,
    techies: PropTypes.array.isRequired,
    searchKey: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
};
