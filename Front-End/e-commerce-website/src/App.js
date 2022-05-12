import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar/navbar"
import {Home} from "./Components/Home/Home"
import {Footer} from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Footer/>
    </div>
  );
}

export default App;
