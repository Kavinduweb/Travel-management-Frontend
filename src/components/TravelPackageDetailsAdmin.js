import React, {useState, useEffect} from "react"
import axios from "axios";
import { Link ,useParams, useHistory} from "react-router-dom";
import '../Styles/TravelPackage.css'


const PackageDetailsAdmin=()=>{

const [tpackage,viewPackage] = useState({
  packageName:"",
  destination:"",
  district:"",
  date:"",
  noofdays:"",
  noofnights:"",
  vehical:"",
  perperson:""
});

const [openModal,setOpenModal] = useState(false) 

const {id}=useParams();

const loadPackage = async()=>{
    const res = await axios.get(
        (`http://localhost:8070/travelpackages/admin/${id}`)
    );
    viewPackage(res.data.post);
};
useEffect(()=>{
    loadPackage();
})

 
return(
    <div className="container" style={{marginTop:'20px'}}>


      <h4>{tpackage.packageName}</h4>
      <hr/>      
      <div className="Appxx">
      
    <dl className="row">
    <dt className="col-sm-3">Destination</dt>
    
             <dd className="col-sm-9">{tpackage.destination}</dd>

             <dt className="col-sm-3">District</dt>
             <dd className="col-sm-9">{tpackage.district}</dd>

             <dt className="col-sm-3">Date</dt>
             <dd className="col-sm-9">{tpackage.date}</dd>

             <dt className="col-sm-3">No of Days</dt>
             <dd className="col-sm-9">{tpackage.noofdays}</dd>

             <dt className="col-sm-3">No of Nights</dt>
             <dd className="col-sm-9">{tpackage.noofnights}</dd>

             <dt className="col-sm-3">Vehical</dt>
             <dd className="col-sm-9">{tpackage.vehical}</dd>

             <dt className="col-sm-3">Per Person</dt>
             <dd className="col-sm-9">{tpackage.perperson}</dd>
             </dl> 
         
             <button className="btn btn-danger"onClick={()=>{setOpenModal(true);}}>Delete Package</button>
        { openModal && <Modal setOpenModal={setOpenModal}/>}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-danger"><a href ={`/travelpackage/admin/edit/${tpackage._id}`} style={{textDecoration:'none' ,color:'white'}}>Edit Package</a></button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
         </div>
     
      
    <table>
       <td>
    
    
        
        </td>
        </table>

        


    </div>

)

};
export default PackageDetailsAdmin;


function Modal({ setOpenModal }) {
    
  let history = useHistory();
  const [packages,setUser]= useState([]);

  useEffect(()=>{
      loadUser();
  },[]);

  const loadUser= async ()=>{
    const result =await  axios.get("http://localhost:8070/travelpackages/");
    setUser(result.data.existingPackage)

};

const deletepackage = async id =>{
await axios.delete(`http://localhost:8070/travelpackages/admin/delete/${id}`);
alert("Package Deleted");
history.push("/travelpackages/admin");
}

const {id}=useParams();
      return (

        <div className="modalBackground">
          <div className="p">
          <div className="modalContainer">
            <div className="titleCloseBtn">
            <div className="footera"><b>Confirm Delete</b></div>
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
            
            </div>
            <div className="body">
            <p>Are You Sure You Want to Delete this Travel package.? This package can't be restore.
                </p>
         
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>

            
              <button onClick={()=>deletepackage(id)}  >Delete</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
   