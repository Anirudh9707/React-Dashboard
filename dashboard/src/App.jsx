import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Dashboard'
import PieChart from './Piechart'
import { Provider } from 'react-redux'
import store from './store';
// App.js
import Togglecomponent from './Togglecomponent';
import './styles.scss';

function App() {
  const [parentState, setParentState] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const updateParentState = (newState) => {
    setParentState(newState);
  };

  return (
    <div className="App">
      {/* <h1>Parent Component</h1>
      <p>Parent State: {JSON.stringify(parentState)}</p> */}
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      <Togglecomponent isVisible={isVisible} />
      <Provider store={store}>
      <div className="App">
        <h1>Parent Component</h1>
        <PieChart />
        {/* <PieeChart updateParentState={updateParentState} /> */}
      </div>
    </Provider>
    </div>
  );
}

export default App
