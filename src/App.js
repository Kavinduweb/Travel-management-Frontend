
import Header from './components/Header';
import AddPayment from "./components/AddPayment";
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      
      <Header/>

      <Route path ="/add" exact component={AddPayment}/>
      

    </div>
    </Router>
    
    
  );
}

export default App;
