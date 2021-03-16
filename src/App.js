import './App.css';
import { Route, Switch } from  'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <Switch>
      <Route path="/detail" component={Detail} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} /> 
      <Route path="/" component={Login} />
    </Switch>
  );
}

export default App;
