
import Header from './components/Header';
import AddPayment from "./components/AddPayment";
import PackageDetails from './components/TravelPackageDetails';
import PackageBooking from './components/PackageBooking';
import AllPackagesAdmin from './components/TravelPackagesAdmin';
import CreatePackage from './components/AddTravelPackage';
import EditPackage from './components/EditTravelPackage';
import HomePage from './components/HomePage';

import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      
      <Header/>

      <Route path ="/add" exact component={AddPayment}/>
      <Route path="/booking" exact component = {PackageBooking}></Route>
       <Route path="/travelpackages" exact component = {AllPackagesAdmin}></Route>
       <Route path="/travelpackage/add" exact component ={CreatePackage}></Route>
       <Route path="/travelpackages/travelpackage/:id" exact component ={PackageDetails}></Route>
       <Route path="/travelpackages/travelpackage/edit/:id" exact component ={EditPackage}></Route>
      <Route path ="/" exact component={HomePage}></Route>

    </div>
    </Router>
    
    
  );
}

export default App;
