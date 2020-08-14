import React, { useState, useEffect } from 'react'
import Smurf from './Smurf'
import { connect } from 'react-redux'
import { fetchSmurf } from '../store/actions/smurfActions'
import axios from 'axios'
import styled from 'styled-components'



function SmurfList(props) {
    console.log('SmurfList props', props)
    const [ smurfListState, setSmurfListState ] = useState([props])
    console.log("smurfListState", smurfListState)


    useEffect(() =>{
        props.fetchSmurf()
        axios.get('http://localhost:3333/smurfs')
        .then(res =>{
        
        setSmurfListState(res.data)
        })
        .catch(err =>{
        console.log(err.message)
        })
    }, [])

    return(
         <div>
             {smurfListState.map(smurf =>{
                 console.log(smurf)
                 return <Smurf smurf={smurf} key={smurf.id} />
             })}
         </div>
    )
}

const mapStateToProps = (state) =>{
    console.log("State from SmurfList", state)
    return{
        name: state.name,
        age: state.age,
        height: state.height
    }
    
}

export default connect(mapStateToProps, { fetchSmurf })(SmurfList)