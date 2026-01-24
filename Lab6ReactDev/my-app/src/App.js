import logo from './logo.svg';
import './App.css';
import './pokazszczegoly';
import ToggleDetails from './pokazszczegoly';
import ScoreDisplay from './wyswietlwynik';
import TaskList from './listazadan'; 
import UserList from './listauzytkownikow';
import TimerCounter from './licznikczasu';



function App() {
  const wynik = 21; // tu probowalam wpisywac 21, 50 i 123 - wszystko wyswietlalo sie poprawnie
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <ToggleDetails />
          <ScoreDisplay score = {wynik} /> 
          <TaskList />
          <UserList />
          <TimerCounter /> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
