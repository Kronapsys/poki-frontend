import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import LogIn from './containers/LogIn/LogIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Switch>
          
          <Route path='/' exact component = {Home}/>
          <Route path='/register' exact component = {Register}/>
          <Route path='/login' exact component = {LogIn}/>

        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;