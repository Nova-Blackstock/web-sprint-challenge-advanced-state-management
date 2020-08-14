import React from 'react'
import { connect } from 'react-redux'
import { fetchSmurf } from '../store/actions/smurfActions'

const Smurf = props =>{
    console.log("Smurf props", props)
    return (
        <div>
            <h2>{props.smurf.name}</h2>
            <h3>{props.smurf.age}</h3>
            <h3>{props.smurf.height}</h3>
        </div>
    )
}

export default Smurf