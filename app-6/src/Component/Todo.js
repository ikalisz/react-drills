import React from 'react'

export default function Todo(props) {
    let itemListCopy = props.list.slice()
    let displayItemList = itemListCopy.map((val, i) => {
        return <li key={i}>{val}</li>
    })
    return (
        <div>
            <ul>
                {displayItemList}
            </ul>
        </div>
    )
}