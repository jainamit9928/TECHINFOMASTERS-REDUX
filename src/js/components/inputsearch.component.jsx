import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const InputSearch = (props) => (
        <div className='form-inline'>
                <div className='form-group has-feedback'>
                    <input type='text' className='form-control' value={ props.searchKey } onChange={ (e) => props.setSearchKey(e.target.value) }></input>
                    { props.searchKey && <span className='glypho' onClick={ props.clearSearchKey }>x</span> }
                </div>
                <Link  to={ `/search/${props.searchKey}` }><input  type='button'  className='btn btn-info' disabled={ !props.searchKey.trim().length>0 } value='Search'/></Link>
         </div>
)

 InputSearch.propTypes = {
   setSearchKey: PropTypes.func.isRequired,
   clearSearchKey: PropTypes.func.isRequired,
   searchKey: PropTypes.string,
  }
export default InputSearch
