import React, {useState, useEffect} from "react"
import axios from "axios";
import { Link ,useParams, useHistory} from "react-router-dom";
import '../../Styles/TravelPackage.css'
import HeaderAdmin from '../HeaderAdmin'


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

const deletepackage = async id =>{
   // eslint-disable-next-line no-restricted-globals
   if(confirm("Are you Sure you want to delete this?")){
  await axios.delete(`http://localhost:8070/travelpackages/admin/delete/${id}`);
  alert("Package Deleted");
  window.location.href = "/travelpackages/admin";
  
  }}

 
return(
  <div>
  <HeaderAdmin/>


  <div className="infoadmin" >
    <div className="container" style={{marginTop:'20px'}}>

    <small class="text-muted" style={{marginInlineStart:"2%"}}>  
             <button type="submit" class="btn btn-primary" style={{width:"100px"}}>
               <a href="/travelpackages/admin" style={{textDecoration:'none' ,color:'white'}} ><i class="fas fa-angle-left mr-2"></i>Back</a></button>
 </small> <br/><br/>



    <div class="card" >
    <img style={{height:"500px"}} class="card-img-top"src={`/uploads/${tpackage.packageImage}`} alt="..."  />
    <div class="card-body" style={{backgroundColor:"#DDE8E8"}}>
      <h5 class="card-title">{tpackage.packageName}</h5>
      <p class="card-text">{tpackage.date}   </p>
      <p class="card-text">{tpackage.destination}   </p>
      <p class="card-text">{tpackage.discription}   </p>
    </div>
    <div class="card-footer" style={{backgroundColor:"#ADADAD"}}>


    <ul class="postcard__tagbox" style={{fontSize:"16px"}}>
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>PP Rs.&nbsp;{tpackage.perperson}</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>{tpackage.noofdays}&nbsp;{tpackage.noofnights}</li>
					<li class="tag__item play blue">	<i class="fas fa-car mr-2"></i>{tpackage.vehical}	</li>
           
             <li >
             <small class="text-muted" style={{marginInlineStart:"15%"}}> 
              <button type="submit" class="btn btn-danger" style={{width:"300px",fontSize:"20px"}} onClick={()=>deletepackage(id)} >
               Delete Package</button>
              
             </small>
             </li>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
</div>
)

};

export default PackageDetailsAdmin

   