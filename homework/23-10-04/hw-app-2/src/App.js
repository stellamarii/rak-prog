import "./App.css";
import ButtonAppBar from "./components/AppBar";
import Interests from "./components/Interests";

function App() {
    return (
        <div className="Container">
            <ButtonAppBar />
            <Interests />
        </div>
    );
}

export default App;
