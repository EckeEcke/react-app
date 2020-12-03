import './App.css';
import Contactpage from "./Components/Contact";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "./Components/Dashboard";




function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/Contact" component={Contactpage} />

      </Switch>
    
      
      
      
      
    </div>
  );
}

export default App;
