import React from 'react'
import Techie from './techie.component'
import PropTypes from 'prop-types'
import ErrorComponent from './showerror.component'
import _ from 'lodash'

const VisibleTechieList = (props) => {
    let noData = false;
    if (props.params.id && (!(props.queryParam.trim().length>0)   || !(props.visibleTechies.length > 0))) {
        noData = true
    }
    return (
        <div>
            {props.visibleTechies.length > 0 ?
                _.map(props.visibleTechies, (techie) => (
                    <Techie key={techie.id} techie={techie} />
                )) :
                (<ErrorComponent noDataFound={noData} />)}
        </div>
    )

}

VisibleTechieList.propTypes = {
    visibleTechies: PropTypes.array.isRequired,
    queryParam: PropTypes.string.isRequired,
    params:PropTypes.object
};
export default VisibleTechieList
