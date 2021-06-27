import Navbar from './components/Navbar';
import Content from './components/Content';
import Cart from './components/Cart';
import SaveForLater from './components/SaveForLater';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router> 
        <Navbar />
        <Switch>
          <Route exact path="/" >
          <Content />
        </Route>
          <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/saveforlater">
          <SaveForLater />
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
