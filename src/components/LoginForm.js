import { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'

function LoginForm(){
    let navigate = useNavigate()
    const [value, setValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('hhh')
        navigate(`/accountPage/${value}`);
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Enter your username: </label>
            <input type="text" id="username" onChange={handleChange}/>

            {/* <label htmlFor="password"></label>
            <input type="text" id="password"/> */}
            <button type='submit'>Sign in</button>
        </form>
        </>
    )
}
export default LoginForm
