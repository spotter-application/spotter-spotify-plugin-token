import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState();

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');
    const plugin = params.get('state');

    if (code) {
      window.location.href = `spotter://x-callback-url/command?type=patchStorage&pluginName=${plugin}&value={"token":"${code}"}`;
      setCode(code);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {code ? <>
          <div>
            Awesome 👏
          </div>
          <div>
            Now we have to pass your token to Spotter 🚀
          </div>
        </> : <div>Something went wrong 🧐</div>}
        <div>
        </div>
      </header>
    </div>
  );
}

export default App;
