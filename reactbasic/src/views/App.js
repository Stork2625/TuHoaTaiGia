import logo from './logo.svg';
import './App.scss';
import MyConponent from './Example/MyComponents';
// Có hai loại: Class Component/ funtion component(function, arrow)
// JSX
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Cái lồn dcm này học hành đéo hiệu quả t cay vcl
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyConponent/>
        {/* <MyConponent></MyConponent> */}
      </header>
    </div>
  );
}

export default App;
