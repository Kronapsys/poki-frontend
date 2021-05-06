import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import LogIn from './containers/LogIn/LogIn';
import MainMenuParents from './containers/MainMenuParents/MainMenuParents';
import QRGenerator from './containers/QRGenerator/QRGenerator';
import MainMenuTeachers from './containers/MainMenuTeachers/MainMenuTeachers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Switch>

          <Route path='/' exact component = {Home}/>
          <Route path='/register' exact component = {Register}/>
          <Route path='/login' exact component = {LogIn}/>
          <Route path='/mainMenuParents' exact component = {MainMenuParents}/>
          <Route path='/QRGenerator' exact component = {QRGenerator}/>
          <Route path='/mainMenuTeachers' exact component = {MainMenuTeachers}/>

        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;