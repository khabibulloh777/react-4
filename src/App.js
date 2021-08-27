import './App.css';
import Bar from './components/Bar';
import Home from './Home';
import Counter from './Counter';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="app">
      <Counter/>

      <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
      <Bar/>
      </Route>
      </Switch>
  
    </div>
    </Router>
  );
}

export default App;
