import React from 'react'

export default function Login(props) {
    return(
        <div>
            <span>Username:</span>
            <input type="text" onChange={(e) => props.updateUserName(e.target.value)} />
            <span>Password:</span>
            <input type="text" onChange={(e) => props.updatePassword(e.target.value)} />
            <button onClick={props.buttonAction}>Login</button>
        </div>
    )
}