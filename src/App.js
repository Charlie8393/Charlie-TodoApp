import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Mainpage from"./MainPage";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Mainpage} />
      </Router>
    </div>
  );
}

export default App;
