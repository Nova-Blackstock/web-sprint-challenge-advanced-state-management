import React from 'react'
import { connect } from 'react-redux'
import { fetchSmurf } from '../store/actions/smurfActions'
import styled from 'styled-components'

const StyledSmurf = styled.div`
background: blue;
color: white;
border-radius: 50% 50%;
width: 40%;
display: flex;
flex-direction: column;
margin: 5% 30%;;
`

const Smurf = props =>{
    console.log("Smurf props", props)
    return (
        <StyledSmurf>
            <h2>{props.smurf.name}</h2>
            <h3>{props.smurf.age}</h3>
            <h3>{props.smurf.height}</h3>
        </StyledSmurf>
    )
}

export default Smurf