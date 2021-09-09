import React, {useState, useEffect ,Component} from "react"
import axios from "axios";
import { Link,useParams ,useHistory} from "react-router-dom";
import '../../Styles/TravelPackage.css'


const ViewPackage=()=>{

    const [tpackage,viewPackage] = useState({
        packageName:"",
        destination:"",
        date:"",
        noofdays:"",
        noofnights:"",
        packageImage:"",
        perperson:""
    });
    
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
      <div className="info" >
        <div className="container" style={{marginTop:'20px'}}>
       


        <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`/uploads/${tpackage.packageImage}`} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8" style={{backgroundColor:"  hsl(0,100%,25%,0.1)	"}}>
      <div class="card-body" >
        <h2 class="card-title"> {tpackage.packageName} </h2>
        <p class="card-text"> <b>{tpackage.destination}</b></p>
        <p class="card-text"><small class="text-muted">{tpackage.date}</small></p>
        <p class="card-text"> No of Days -<b> {tpackage.noofdays}</b></p>
        <p class="card-text"> No of Nights - <b>{tpackage.noofnights}</b></p>
        <p class="card-text"> Per Person - <b>{tpackage.perperson}</b></p>
      </div>
    </div>
  </div>
</div>   </div>





        </div>
    
    )
    
    };

export default function DeleteTravelPackage() {

    const [openModal,setOpenModal] = useState(false) 

    return (
        <div style={{backgroundColor:"hsl(0,0%,0%,0.1)"}}> 
              <div className="Appxx"  >
               <h1>Do You Want to delete this travel package .?</h1>
               <ViewPackage/>
                 <button className="openModalBtn" className="btn btn-danger" onClick={()=>{setOpenModal(true);}}>Delete Package</button>
                { openModal && <Modal setOpenModal={setOpenModal}/>}    
              </div>
        </div>
      )
      }

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
alert("deleted");
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
                <button onClick={() => {setOpenModal(false);}} id="cancelBtn"> Cancel </button>
                <button onClick={()=>deletepackage(id)}  >Delete</button>
              </div>
              
            </div>
          </div>
          </div>  
        );
      }
      
      