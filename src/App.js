import logo from './logo.svg';
import './App.css';

function App() {
  console.log('Hello, Docker!!! This is a React App running in a Docker container.');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, Docker!!! This is a React App running in a Docker container.
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
