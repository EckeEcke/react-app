import './App.css';
import Contactpage from "./Components/Contact";
import { Route, Switch } from 'react-router-dom';
import Dashboard from "./Components/Dashboard";
import NewPost from "./Components/NewPost"
import Detailpage from "./Components/Detailpage";
import Navigation from "./Components/Navigation";





function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/Contact" component={Contactpage} />
        <Route path="/New" component={NewPost} />
        <Route path="/Details/:id" component={Detailpage} />

      </Switch>
    
      
      
      
      
    </div>
  );
}

export default App;