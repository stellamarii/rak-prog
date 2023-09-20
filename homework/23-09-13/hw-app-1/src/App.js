import logo from './logo.svg';
import './App.css';
//nimi ekraani keskel
//list 12 huvist
//kontaktivorm 3 btn + submit
//call to action
function CreateList(nr) {
    const hobbies = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    let listItems = []
    for (let i = 0; i < 12; i++) {
        listItems.push(<li key={1}>{hobbies[i]}</li>)
    }
        
    return <ul>{listItems}</ul>
}
function App() {
    return (
        <div className="App">
        <header className="App-header">
            <h1>Stella-Marii</h1>
            {CreateList(12)}
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
        </header>
        </div>
    );
}


export default App;
