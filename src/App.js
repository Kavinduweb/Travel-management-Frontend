
import Header from './components/Header';
import AddPayment from "./components/AddPayment";
import PostDetails from './components/TravelPackageDetails';
import PackageBooking from './components/PackageBooking';
import Home from './components/TravelPackagesAdmin';
import CreatePost from './components/AddTravelPackage';
import EditPost from './components/EditTravelPackage';

import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      
      <Header/>

      <Route path ="/add" exact component={AddPayment}/>
      <Route path="/booking" exact component = {PackageBooking}></Route>
       <Route path="/travelpackages" exact component = {Home}></Route>
       <Route path="/travelpackage/add" exact component ={CreatePost}></Route>
       <Route path="/travelpackages/travelpackage/:id" exact component ={PostDetails}></Route>
       <Route path="/travelpackages/travelpackage/edit/:id" exact component ={EditPost}></Route>
      

    </div>
    </Router>
    
    
  );
}

export default App;
