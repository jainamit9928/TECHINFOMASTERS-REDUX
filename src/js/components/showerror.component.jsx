import React from 'react'
import PropTypes from 'prop-types'

const ErrorComponent = (props) => {
    if (props.noDataFound) {
        return (
            <div className='alert alert-info'>
                <strong>No Data Found!</strong> Please Search Again.
            </div>
        )
    }else if (props.dataNotFetched && props.errorMessage) {
        return (
            <div className='alert alert-danger'>
                <strong>{props.errorMessage}! Please try again.</strong>
            </div>
        )

    }
    return null
}

ErrorComponent.propTypes = {
    dataNotFetched: PropTypes.bool,
    noDataFound: PropTypes.bool,
    errorMessage: PropTypes.string,
};
export default ErrorComponent
