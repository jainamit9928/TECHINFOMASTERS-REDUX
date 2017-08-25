import React from 'react'
import PropTypes from 'prop-types'

export default class Modal extends React.PureComponent {
  close(e) {
    e.preventDefault()
    if (this.props.onClose) {
      this.props.onClose()
    }
  }
  render() {
    if (this.props.isOpen === false) {
      return null
    }
      return(
          <div className='overlay'>
              <div className='popup'>
                <header className='retroshadow'>{ this.props.header }</header>
                <a className='close' onClick={ (e) => this.close(e) }>&times;</a>
                <div className='content'>{ this.props.children }</div>
              </div>
          </div>
    )
  }
}
 Modal.propTypes = {
   onClose: PropTypes.func.isRequired,
   isOpen: PropTypes.bool.isRequired,
   header: PropTypes.string,
  }
