import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Switch>
          <Route path='/' exact component = {Home}/>

        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;