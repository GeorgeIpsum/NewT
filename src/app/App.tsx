import React, { useEffect, useState } from 'react';
import { loadString, save } from '../utilities';
import './App.css';
import TreePicker from '../components/tree-picker';
import Tree from '../components/tree';
import Clock from '../dummies/clock';
import Weather from '../dummies/weather';

const App: React.FC = () => {
  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    const init = loadString("init");
    if(init) {

    } else {

    }
  });

  return (
    <div className="App">
      <div className="top-row">
        { firstTime ? 
          <TreePicker /> :
          <Tree />
        }
        <Weather />
        <Clock />
      </div>
      <div className="bottom-row">

      </div>
    </div>
  );
}

export default App;
