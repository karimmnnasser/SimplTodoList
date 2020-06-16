import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {

    const {items,Delete} = props;
    let length = items.length;

    const ItemsList = length ? (
            items.map ((item) => {
                return (
                    <div key = {item.id} >
                        <span className = "name"> {item.name} </span>
                        <span className = "age"> {item.age} </span>
                        <span className = "action icon" onClick = {()=> Delete(item.id)} > x </span>
                    </div>
                )
            })
    ) : <p> No There Is Item To Show </p>

    return (
        <div className = "ClassList"> 
            <div>
                <span className = "name header">name</span>
                <span className = "age header">age</span>
                <span className = "action header">action</span>
            </div>

            {ItemsList}
        </div>
    )
}

export default TodoItem