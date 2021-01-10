import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Git from './Pages/Git';
import Git1 from './Pages/Git1';
import Git2 from './Pages/Git2';
import Git3 from './Pages/Git3';
import Git4 from './Pages/Git4';
import Git5 from './Pages/Git5';


function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      <Switch>
        <Route path="/" exact component={Git}/>
        <Route path="/git1" component={Git1}/>
        <Route path="/git2" component={Git2}/>
        <Route path="/git3" component={Git3}/>
        <Route path="/git4" component={Git4}/>
        <Route path="/git5" component={Git5}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
