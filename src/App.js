
import Header from './components/Header';
import AddPayment from "./components/AddPayment";
import PackageDetails from './components/TravelPackageDetails';
import PackageDetailsAdmin from './components/TravelPackageDetailsAdmin';
import PackageBooking from './components/PackageBooking';
import AllPackagesAdmin from './components/TravelPackagesAdmin';
import CreatePackage from './components/AddTravelPackage';
import EditPackage from './components/EditTravelPackage';
import HomePage from './components/HomePage';
import AllPackages from './components/TravelPackages';
import AllBooking from './components/BookingAllDetails';


import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      
      <Header/>
      <Route path ="/add" exact component={AddPayment}/>
      <Route path="/booking" exact component = {PackageBooking}></Route>
       <Route path="/travelpackages/admin" exact component = {AllPackagesAdmin}></Route>
       <Route path="/travelpackage/admin/add" exact component ={CreatePackage}></Route>
       <Route path="/travelpackages/travelpackage/:id" exact component ={PackageDetails}></Route>
       <Route path="/travelpackages/travelpackage/admin/:id" exact component ={PackageDetailsAdmin}></Route>
       <Route path="/travelpackages/admin/edit/:id" exact component ={EditPackage}></Route>
      <Route path ="/" exact component={HomePage}></Route>
      <Route path="/travelpackages" exact component = {AllPackages}></Route>
      <Route path="/allbooking" exact component = {AllBooking}></Route>

    </div>
    </Router>
    
    
  );
}

export default App;
