import React ,{useState} from "react";
import Reactstars from "react-rating-stars-component";
import axios from "axios";


export default function AddRating(props){

    const[name, setName] = useState('')
    const[comment, setComment] = useState('')
    const[rating, setRating] =useState(0)

    const ratingChanged = (rating)=>{
       setRating(rating)
         };
         
         console.log(ratingChanged);

         
         const onClick = async ()=>{
         
        try{
            await axios.post('http://localhost:8070/travelpackage/review', {
                name,
                comment,
                rating,
                packageId:props.id
            })
            alert(`ThankYou! You have given ${rating} star rating for us.`);
            window.location.replace(`/travelpackages/travelpackage/${props.id}`)
            
         }catch (error){
          alert("Please fill this field");
           }
         
        };
        

return(
      
<div className="container">  
<div className="app">
 <div>
    <div className="mb-3" >
    
    <div className="rating">   
           <Reactstars   size={40} value={rating}   onChange={ratingChanged}/>
    </div>
   
  <input required type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="add your name"/> <br></br>
  <input required type="text" value={comment} onChange={(e)=> setComment(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="add your comment"/>

 </div>
  
  {/* <button
   type="submit" 
   className="btn btn-primary"
   
  >Submit</button> */}

<button className="btn btn-success" onClick={onClick}>comment</button><hr/>


</div>
</div>
</div>
)
}
