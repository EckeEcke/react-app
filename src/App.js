import './App.css';
import Contactpage from "./Components/Contact";
import { Route, Switch } from 'react-router-dom';
import Dashboard from "./Components/Dashboard";
import NewPost from "./Components/NewPost"




function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/Contact" component={Contactpage} />
        <Route path="/New" component={NewPost} />

      </Switch>
    
      
      
      
      
    </div>
  );
}

export default App;
