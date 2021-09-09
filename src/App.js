import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState();

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    setCode(params.get('code'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Awesome 👏
        </div>
        <div>
          Now paste your token to Spotter 🚀
        </div>
        <div>
          <input value={code}></input>
          <button onClick={() => {navigator.clipboard.writeText(code)}}>copy</button>
        </div>
      </header>
    </div>
  );
}

export default App;
