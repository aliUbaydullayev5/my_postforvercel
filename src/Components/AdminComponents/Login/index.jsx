import React, {useState} from 'react'
import {Block} from "./style";

const Login = ({changeAdmin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = async () => {
        const rawResponse = await fetch('https://preoject2.herokuapp.com/api/loginAdmin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const content = await rawResponse.json();
        if (content?.token){
            localStorage.setItem('token', content?.token)
            changeAdmin(true)
        }
    }

    return(
        <Block>
            <h1>Login Panel</h1>
            <input type={'text'} placeholder={'email'} onChange={(e)=> setEmail(e.target.value)} />
            <input type={'password'} placeholder={'password'} onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={()=> auth()}>Login</button>
        </Block>
    )
}

export default Login