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
        noofnights:""
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
      <div className="info">
        <div className="container" style={{marginTop:'20px'}}>
          <h4>{tpackage.packageName}</h4>
          <hr/>      
        <dl className="row">
                 <dt className="col-sm-3">Start Point</dt>
                 <dd className="col-sm-9">{tpackage.destination}</dd>
    
                 <dt className="col-sm-3">Price</dt>
                 <dd className="col-sm-9">{tpackage.noofdays}</dd>
    
                 <dt className="col-sm-3">Number of Days</dt>
                 <dd className="col-sm-9">{tpackage.noofnights}</dd>
    
                 <dt className="col-sm-3">Minimum Person</dt>
                 <dd className="col-sm-9">{tpackage.date}</dd>

        </dl>    </div>
        </div>
    
    )
    
    };

export default function DeleteTravelPackage() {

    const [openModal,setOpenModal] = useState(false) 

    return (
        <div>
              <div className="Appxx">
               <h1>Do You Want to delete this travel package .?</h1>
               <ViewPackage/>
                 <button className="openModalBtn" onClick={()=>{setOpenModal(true);}}>Delete Package</button>
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
      
      