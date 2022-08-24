import './App.css';
import Navbar from './Navbar';
import crow from './images/crow.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={crow} alt="crow logo" />
    </div>
  );
}

export default App;
