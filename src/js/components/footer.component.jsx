import React from 'react'
import { COPY_RIGHT } from '../constants/constants'

const Footer = () => (
    <footer>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <p>{COPY_RIGHT}</p>
                </div>
            </div>
        </div>
    </footer>
)
export default Footer

