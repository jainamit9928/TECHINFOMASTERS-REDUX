import React from 'react'
import PropTypes from 'prop-types'
import Modal from './modal.component.jsx'
import TechieInfoEdit from './techieinfoedit.component'
import TechiInfo from './techieinfo.component'
import { HEADER } from '../constants/constants'
import _ from 'lodash'

class TechieDetails extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            techie: {},
            hasError: false
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
        this.validateForm = this.validateForm.bind(this)
    }

    componentDidMount() {
        this.setState({ techie: Object.assign({}, this.props.filteredTechie) })
    }

    onUpdate() {
        this.props.actions.updatDataRequest(this.state.techie.id, this.state.techie)
        this.closeModal()
    }
    validateForm() {
        if (this.state.techie.name == "" || this.state.techie.title == "" || this.state.techie.organisation == "" || this.state.techie.country == "") {
            return true
        }
        else {
            return false
        }

    }
    onChange(e) {
        const temp = this.state.techie
        const key = e.target.name
        temp[key] = e.target.value
        if (this.validateForm()) {
            this.setState({ hasError: true })
        }
        else {
            this.setState({ hasError: false })
        }
        this.setState({ techie: Object.assign({}, temp) })
    }
    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })

    }

    render() {
        return (

            <div>
                {
                    Object.keys(this.props.filteredTechie).length > 0 && (
                        <div>
                            <TechiInfo techie={this.props.filteredTechie} />
                            <button type='button' className='btn btn-info col-md-offset-5' value='edit' onClick={() => this.openModal()}>Edit</button>
                            <Modal header={HEADER} isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                                <TechieInfoEdit onChange={this.onChange} techie={this.state.techie} onUpdate={this.onUpdate} onClose={this.closeModal} hasError={this.state.hasError} />
                            </Modal>
                        </div>
                    )
                }
            </div>
        )
    }

}
TechieDetails.propTypes = {
    actions: PropTypes.object.isRequired,
    filteredTechie: PropTypes.object.isRequired,
}
export default TechieDetails
