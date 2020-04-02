import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Filter1 from './components/Filters/Filter1';
import Filter2 from './components/Filters/Filter2';
import Filter3 from './components/Filters/Filter3';
import Filter4 from './components/Filters/Filter4';
import Filter5 from './components/Filters/Filter5';
import { GlobalProvider } from './context/GlobalState';
import UnFiltered from './components/UnFiltered';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <Switch>
          <div className="container">
            <Route exact path="/" component={UnFiltered} />
            <Route exact path="/filter1" component={Filter1} />
            <Route exact path="/filter2" component={Filter2} />
            <Route exact path="/filter3" component={Filter3} />
            <Route exact path="/filter4" component={Filter4} />
            <Route exact path="/filter5" component={Filter5} />
          </div>
        </Switch>
      </GlobalProvider>
    </div>
  );
}

export default App;
