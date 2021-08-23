import React,{useReducer, useState,useEffect} from "react"
import {useHistory,useParams} from 'react-router-dom';

import axios from "axios";


  
const EditPackage = ()=>{

      
        

    let history = useHistory();
    const {id}=useParams();

   const [Registers,addPost] = useState({
           
        Name:"",
        Email:"",
        Password:"",
        Num:""

   });
const {Name,Email,Password,Num}=Registers;

const onInputChange = e=>{
    addPost({...Registers,[e.target.name]: e.target.value});
};

const onSubmit=async e =>{
    e.preventDefault();
    await axios.put(`http://localhost:8070/user/update/${id}`,Registers);

    history.push("/profile");
    alert("  Successful")
}

const loadPackage = async()=>{
   const res = await axios.get
       (`http://localhost:8070/user/details/${id}`)

       addPost(res.data.BackendData)
     }
     useEffect(()=>{
       loadPackage();
   },[]);

        return(

            <div>
                
        <form onSubmit={e=>onSubmit(e)}>

                <input type="text" name="Name"  value={Name}onChange={e=>onInputChange(e)} />
                <input type="text"  name ="Email" value={Email}  onChange={e=>onInputChange(e)} />
                <input type="text" name="Num" value={Num}  onChange={e=>onInputChange(e)}/>
                <input type="text" Name="Password" value={Password} onChange={e=>onInputChange(e)} />


                <input type="submit" name="submit" class="reg" value="Edit Conifrm"/>

                            </form>
            </div>

            
        )



    }



    export default EditPackage