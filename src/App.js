import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';

function App() {
  const appPath = process.env.PUBLIC_URL;  

  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path={appPath} exact component={HomePage} />
          <Route path={appPath + '/drift'} component={DriftPage} />
          <Route path={appPath + '/timeattack'} component={TimeAttackPage} />
          <Route path={appPath + '/forza'} component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
