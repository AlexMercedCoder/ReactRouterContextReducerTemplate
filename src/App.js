import './App.css';
import {useAppState} from "./ctxandreducer"

function App() {

  const appState = useAppState()



  return (
    <div className="App">
      <h1>{appState.state.count}</h1>
      <button onClick={() => appState.update("add", 1)}>Add</button>

    </div>
  );
}

export default App;
