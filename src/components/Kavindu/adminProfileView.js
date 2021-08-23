import React ,{Component} from 'react';

import axios from 'axios';

export default class Display extends Component{
   
    
    constructor(props){
        super(props);

        this.state={
            RegData:[]
        
    };
        

}

componentDidMount(){

this.DisplayData(); 

}

DisplayData(){  //Display All details
    
    axios.get("http://localhost:8070/access/Details").then(res =>{
        
        if(res.data.success){
            this.setState({
                RegData:res.data.BackendData
            
            });
             console.log(this.state.RegData);
        }
        else (
            console.log("cant")
        )
    })

}

filterData(RegData,searchkey){  //Search 
    console.log("err2")
    const result = RegData.filter((post)=>
        
        post.Email.includes(searchkey)
     )
    
    this.setState({RegData:result})
    
    console.log(this.setState({RegData:result}))

}


Handelsearch = (e) => {
   const searchkey = e.currentTarget.value;
  

    axios.get("http://localhost:8070/access/Details").then(res =>{
        
        if(res.data.success){
           
             this.filterData(res.data.BackendData,searchkey)
        }
        else {

            console.log("eee")
        }
        
})
}

onDelete = (id) =>{
   
    const url="http://localhost:8070/access/delete/";
    const id1 = id;
        axios.delete(url+id1).then((res)=>{

        alert("success Deleted");
        this.DisplayData();
})

}

render(){
return (
      
          <div>

              <br></br>
              <hr></hr>
              <h2> All Registration Details </h2>  
                <input type="text" placeholder="Search By Email" id="searchid" onChange={this.Handelsearch}></input> 
                    

    
   
                <div className="container">
               
                    <table className="table">

               
                   <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Number</th>
                        <th scope="col">Password</th>
                        

                        </tr>       
                </thead>  
                 <tbody>
                {this.state.RegData.map((RegData,index)=>(

                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{RegData.Name}</td>
                        <td>{RegData.Email}</td>
                        <td>{RegData.Num}</td>
                        <td > {RegData.Password}</td>
                       
                        <td>
                            <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(RegData._id)}>
                                <i className ="fas fa-trash-alt"></i>&nbsp;Block User
                            </a>
                        </td>

                        <td>
            
                        </td>
                    </tr>



                ))}
                
                   


                    
                    </tbody>
                    </table>

                    </div>
                    </div>
                
       
)}

}