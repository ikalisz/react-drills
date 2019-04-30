import React from 'react'
import Todo from './Todo'

export default function List(props) {
    let list = props.tasks.map((val, i) => {
        return <Todo key={i} task={val} />
    })
    return (
        <div>{list}</div>
    )
}