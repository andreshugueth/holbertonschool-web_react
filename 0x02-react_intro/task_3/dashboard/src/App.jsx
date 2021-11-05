import './App.css';
import HolbertonLogo from './HolbertonLogo.jpg';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={HolbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="Email">Email</label>
        <input type="text" id="Email" name="Email" />
        <label htmlFor="Password">Password</label>
        <input type="password" id="Password" name="Password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;
