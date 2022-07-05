import logo from './logo.svg';
import './App.css';
import Tombol from './components/Tombol';

function App() {

  return (
    <div className="App">
        
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h3>Sri Nuhayatun Tugas-4</h3>
        </p>
        <Tombol nama="Simpan"/>
        <Tombol nama="Edit"/>
        <Tombol nama="Delete"/>
      </header>
    </div>
  );
}

export default App;
