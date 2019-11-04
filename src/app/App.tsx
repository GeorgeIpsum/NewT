import React, { useEffect, useState } from 'react';
import { loadString, save, load } from '../utilities';
import './App.css';
import TreePicker from '../components/tree-picker';
import Tree from '../components/tree';
import Clock from '../dummies/clock';
import Weather from '../dummies/weather';

const getCurrentTree = (): any | boolean => {
  const trees = load("trees");
  if(trees) {
    
  } return false;
}

const determineFirstTime = (): boolean => {
  if(loadString("init")) return true;
  return false;
}

const App: React.FC = () => {
  const [firstTime, setFirstTime] = useState(determineFirstTime);
  const [tree, setCurrentTree] = useState(getCurrentTree);

  useEffect(() => {

  });

  return (
    <div className="App">
      <div className="top-row">
        { firstTime || !tree ? 
          <TreePicker firstTime={firstTime} /> :
          <Tree tree={tree} />
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
