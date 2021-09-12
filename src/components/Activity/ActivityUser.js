import React,{useReducer, useState,useEffect} from "react"
import {useHistory,useParams} from 'react-router-dom';
import axios from "axios";

const ActivitySelect = (props)=>{


    const [tactivity,viewActivity] = useState({
        aname:"",
        category:"",
        mindescription:"",
        description:"",
        price:""
      });
    
      const {id}=useParams();

const loadPackage = async()=>{
    const res = await axios.get(
        (`http://localhost:8070/activities/${id}`)
    );
    viewActivity(res.data);
};
useEffect(()=>{
    loadPackage();
})

    let history = useHistory();

    const [post,addPost] = useState({
            aName:"",
            aprice:"",
            name:"",
            phone:"",
            content:""
            
    });
 const {aName,aprice,name,phone,content}=post;


 const onInputChange = e=>{
     addPost({...post,[e.target.name]: e.target.value});
 };

 const onSubmit=async e =>{
     e.preventDefault();
     const {aName,aprice,name,phone,content}=post;
     const {aname,price}=tactivity;
      
     const data={
        aName:aname,
        aprice:price,
        name:name,
          phone:phone,
          content:content
     }

     await axios.post ("http://localhost:8070/activityselect/add",data);
     alert("Activity Select Successfull. Click Ok to Pay")
     history.push(`/payment/add-activity/${props.match.params.id}`);
    
 }
 const {aname,price} = tactivity;
 return(
    <div className="infotr">
    <div className="bodyaa" style={{background:"url(https://static.officeholidays.com/images/1280x853c/sri-lanka-01.jpg)", backgroundSize: "cover"}}> 
    
       <div className="bodybb"style={{background: "#93a8ac"}}>
    <div className="container">
    
        <div className="w-70 mx-auto shadow p-5"  >
        <div className="bodycc">
            <h2 className ="text- mb-10"><b>Select Activity</b></h2>
            </div>
            <hr/>  

           
            <form onSubmit={e=>onSubmit(e)}>

        
            <div class="row">
    <div class="col">

            <div class="input-group mb-3" >
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1" style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>Package Name</span>
  </div>

  <input type="text" className="form-control"   name="aName"
         value={aname}
         onChange={e=>onInputChange(e)}
         disabled/>

</div></div>
<div class="col">
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1" style={{backgroundColor:'hsl(0,0%,0%,0.3)',color:"white"}}>Price</span>
  </div>

  <input type="text" className="form-control"   name="aprice"
         value={price}
         onChange={e=>onInputChange(e)}
         disabled/>

</div></div></div>




                <div className="form-group">
                    <label><b>Name</b></label>
                    <input type="text" className="form-control" placeholder="Enter Your Name"  name="name"
         value={name}
         onChange={e=>onInputChange(e)}
         required/>
                </div>


                <div className="form-group">
                    <label><b>Phone</b></label>
                    <input type="text" className="form-control" placeholder="Enter Phone Number"  name="phone"
         value={phone}
         onChange={e=>onInputChange(e)}
         required/>
                </div>

   <div className="form-group">
                    <label><b>Qunatity</b></label>
                    <input type="text" className="form-control" placeholder="Qun:"  name="content"
         value={content}
         onChange={e=>onInputChange(e)}
         required/>
                </div>
               <br/>

                <button type="submit" class="btn btn-danger btn-block" > Select Now</button>
               
            </form>
            </div>
</div>
</div>
<br/><br/>
</div>
</div>

    
    );

};

export default ActivitySelect;
