import React from "react";
import axios from 'axios'
import ReactToPrint from "react-to-print";
import HeaderAdmin from '../HeaderAdmin';


export default class ComponentToPrint extends React.Component{
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





  render() {
    return (
      <div>
        <HeaderAdmin/>
       
     <div className="infoadmin">


     <ReactToPrint
            trigger={() => <button className="btn btn-success"  style={{margintop:'500px'}}>
                <i class="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;Print Report</button >}
            content={() => this.componentRef}
          />


          <div ref={(el) => (this.componentRef = el)}>


       
       
       <form className="form12">
       <h1>Dream Travelers User Report</h1>
             <hr/>
                 
         
     
      <table className="blueTable" border='3'> 

               
      <thead>
       <tr>
           <th scope="col">#</th>
           <th scope="col">Name</th>
           <th scope="col">Email</th>
           <th scope="col">Number</th>
        
           

           </tr>       
   </thead>  
    <tbody>
   {this.state.RegData.map((RegData,index)=>(

       <tr>
           <th scope="row">{index+1}</th>
           <td>{RegData.Name}</td>
           <td>{RegData.Email}</td>
           <td>{RegData.Num}</td>
        
          
          

           
       </tr>



   ))}
   
      


       
       </tbody>
       </table>
      
       </form>
       </div>
       </div>
       </div>
      
    );
  }
}

