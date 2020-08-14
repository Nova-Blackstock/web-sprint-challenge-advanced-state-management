import React, { useState } from 'react'
import axios from 'axios'

export default function Form(props){
    const [form, setForm] = useState({
        name: '',
        age: 0,
        height: 0
    })

    const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    console.log("Form state", form)

    const onSubmit = () =>{
        axios.post('http://localhost:3333/smurfs',{
            name: form.name,
            age: form.age,
            height: form.height
        })
        .then(res =>{
            console.log('postsuccess', res)
        })
        .catch(err =>{
            console.log('postfailure', err.message)
        })
    }

    return(
        <form onSubmit={onSubmit}>
            <input
                name = 'name'
                type= 'text'
                onChange = {handleChange}
            />
            <input
                name = 'age'
                type = 'number'
                onChange = {handleChange}
            />
            <input
                name='height'
                type= 'text'
                onChange={handleChange}
            />
            <button type='submit'>
                Submit
            </button>
        </form>

    )
}