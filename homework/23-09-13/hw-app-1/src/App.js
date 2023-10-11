import './App.css';
import Hello from './components/Hello';
import List from './components/List';
import Form from './components/Form';


function App() {
    return (
        <div className="App">
        <header className="App-header">
            <Hello 
                name="Stella-Marii"
            />
            <List/>
            <Form/>
            
        </header>
        </div>
    );
}


export default App;
