import React from 'react'
import PropTypes from 'prop-types'

const TechiInfo = (props) => (
    <div className='container'>
        <div className='well well-lg table-striped table-bordered table-responsive'>
            <div className='row'>
                <div className='col-md-12 row-block'>
                    <label className='col-md-2 col-md-offset-3'>Name:</label>
                    <div className='col-md-4'>{ props.techie.name }</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 row-block'>
                    <label className='col-md-2 col-md-offset-3'>Title</label>
                    <div className='col-md-4'>{ props.techie.title }</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 row-block'>
                    <label className='col-md-2 col-md-offset-3'>Organisation</label>
                    <div className='col-md-4'>{ props.techie.organisation }</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 row-block'>
                    <label className='col-md-2 col-md-offset-3'>Follower</label>
                    <div className='col-md-4'>{ props.techie.follower }</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 row-block'>
                    <label className='col-md-2 col-md-offset-3'>Following</label>
                    <div className='col-md-4'>{ props.techie.following }</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 row-block'>
                    <label className='col-md-2 col-md-offset-3'>Country</label>
                    <div className='col-md-4'>{ props.techie.country }</div>
                </div>
            </div>
        </div>
    </div>

)
TechiInfo.propTypes = {
    techie: PropTypes.object.isRequired,
}
export default TechiInfo
