import React, {useState, useEffect} from "react"
import axios from "axios";
import { Link ,useParams, useHistory} from "react-router-dom";
import '../../Styles/TravelPackage.css'


const PackageDetailsAdmin=()=>{

const [tpackage,viewPackage] = useState({
  packageName:"",
  destination:"",
  discription:"",
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

  <div className="info">
    <div className="container" style={{marginTop:'20px'}}>


    <div class="card">
    <img style={{height:"400px"}} class="card-img-top"src={`/uploads/${tpackage.packageImage}`} alt="..."  />
    <div class="card-body" style={{backgroundColor:"#DDE8E8"}}>
      <h5 class="card-title">{tpackage.packageName}</h5>
      <p class="card-text">{tpackage.date}   </p>
      <p class="card-text">{tpackage.destination}   </p>
      <p class="card-text">{tpackage.discription}   </p>
    </div>
    <div class="card-footer" style={{backgroundColor:"#ADADAD"}}>


    <ul class="postcard__tagbox" style={{fontSize:"16px"}}>
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>PP&nbsp;{tpackage.perperson}</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>{tpackage.noofdays}&nbsp;{tpackage.noofnights}</li>
					<li class="tag__item play blue">	<i class="fas fa-car mr-2"></i>{tpackage.vehical}	</li>
           
             <li >
             <small class="text-muted" style={{marginInlineStart:"20%"}}> 
              <button type="submit" class="btn btn-danger" style={{width:"300px",fontSize:"20px"}} onClick={()=>{setOpenModal(true);}}>
               Delete Package</button>
                { openModal && <Modal setOpenModal={setOpenModal}/>}
             </small>
             </li>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <li >
             <small class="text-muted"> 
              <button type="submit" class="btn btn-danger" style={{width:"300px",fontSize:"20px"}}>
                <a href ={`/travelpackage/admin/edit/${tpackage._id}`} style={{textDecoration:'none' ,color:'white'}} >Edit Package</a></button>
             </small>
             </li>

				</ul>

        

    </div>
  </div>
    <br/><br/><br/>

     

    </div>
    
    
    
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
    
   