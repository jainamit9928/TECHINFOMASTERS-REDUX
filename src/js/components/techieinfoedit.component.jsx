import React from 'react'
import PropTypes from 'prop-types'

const TechieInfoEdit = (props) => (
        <div className='container-fluid'>
            <form className='form-horizontal'>
                <div className='form-group'>
                    <label>Name:</label>
                    <div>
                        <input className='form-control' name='name' type='text' value={ props.techie.name } onChange={ props.onChange } required/>
                    </div>
                </div>
                <div className='form-group'>
                    <label >Title:</label>
                    <div>
                        <input className='form-control' name='title' type='text' value={ props.techie.title } onChange={ props.onChange } required/>
                    </div>
                </div>
                <div className='form-group'>
                    <label>Organisation:</label>
                    <div>
                        <input className='form-control' name='organisation' type='text' value={ props.techie.organisation } onChange={ props.onChange } required/>
                    </div>
                </div>
                <div className='form-group'>
                    <label>Country:</label>
                    <div>
                        <input className='form-control' name='country' type='text' value={ props.techie.country } onChange={ props.onChange } required/>
                    </div>
                </div>
                <div className='input-group'>
                    <button type='button' className='btn btn-info' value='save' onClick={ props.onUpdate } disabled={ props.hasError }>SAVE</button>
                    <button type='button' className='btn btn-default' value='cancel' onClick={ props.onClose }> CANCEL </button>
                </div>
            </form>
        </div>
    )

TechieInfoEdit.propTypes = {
    techie: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onUpdate:PropTypes.func.isRequired,
}

export default TechieInfoEdit
