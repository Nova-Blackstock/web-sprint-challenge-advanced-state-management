import React, { useState, useEffect } from 'react'
import Smurf from './Smurf'
import { connect } from 'react-redux'
import { fetchSmurf } from '../store/actions/smurfActions'

function SmurfList(props) {
    console.log('SmurfList props', props)
    console.log(props)
    const [ smurfListState, setSmurfListState ] = useState([props])
    console.log("smurfListState", smurfListState)


    useEffect(() =>{
        props.fetchSmurf()
    }, [])

    return(
         <div>
             {smurfListState.map(smurf =>{
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