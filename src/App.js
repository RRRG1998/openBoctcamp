import logo from './logo.svg';
import './App.css';
import Contacts from './components/container/contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contacts></Contacts>
      </header>
    </div>
  );
}

export default App;
