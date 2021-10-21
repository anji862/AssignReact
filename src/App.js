import Details from './Component/screen2';
import Movie from './Component/screen1';
import Form from './Component/form';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={Movie}/>
      <Route exact path="/screen2" component={Details}/>
      <Route exact path="/form" component={Form}/>
    </Router>
    </div>
  );
}

export default App;
