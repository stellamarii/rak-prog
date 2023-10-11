import React from "react"

const Form = () => (
    <>
        <form>
            <label for="name">Name: </label>
            <input type="text" id="name" name="name"></input>
            <br></br>
            <label for="age">Age: </label>
            <input type="number" id="age" name="age"></input>
            <br></br>
            <label for="date">Today's date: </label>
            <input type="date" id="date" name="date"></input>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>
        <br></br>
        <button type="button">Click me!</button>
    </>
)

export default Form
