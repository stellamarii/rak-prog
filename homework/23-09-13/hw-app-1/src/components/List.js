import React from "react"

function CreateList() {
    const hobbies = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    let listItems = []
    for (let i = 0; i < 12; i++) {
        listItems.push(<li key={1}>{hobbies[i]}</li>)
    }
        
    return <ul>{listItems}</ul>
}

const List = () => (
    <div>
        {CreateList()}
    </div>
)

export default List
