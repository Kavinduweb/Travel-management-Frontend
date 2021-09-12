import React, { Component } from 'react'
import axios from 'axios';

export default class AdminRep extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            nic:"",
            phone:"",
            email:"",
            inq:"",
            adrep:""
        }

    }
    handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit= (e) =>{
        
        e.preventDefault();
        const id = this.props.match.params.id;
        const {name,nic,phone,email,inq,adrep} = this.state;

        const data= {
            name:name,
            nic:nic,
            phone:phone,
            email:email,
            inq:inq,
            adrep:adrep            
        }

        console.log(data)

        axios.put(`http://localhost:8070/inquiry/update/${id}`,data).then((res) =>{
           
        if(res.data.success){
                alert("Reply Added to the Inquiry")
                window.location.replace("/adView")
                this.setState({
                    name:"",
                    nic:"",
                    phone:"",
                    email:"",
                    inq:"",
                    adrep:""
                })

            }
            

        })
    }



    componentDidMount(){
        const id = this.props.match.params.id;
        
        axios.get(`http://localhost:8070/inquiry/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    name:res.data.post.name,
                    nic:res.data.post.nic,
                    phone:res.data.post.phone,
                    email:res.data.post.email,
                    inq:res.data.post.inq,
                    adrep:res.data.post.adrep,

                });

                console.log(this.state.post);
            }


        });
    
    }




    render(){
        return(
            
            <div className="col-md-8 mt-4 mx-auto">
               
                <form className="needs-validation" noValidate  id="form">  
                <h1 className="h3 mb-3 front-weight-normal"> Add Reply</h1>
                <hr/>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Reply To the Inquiry</label>
                        <input type="text" 
                        className="form-control"                
                        name="adrep"
                        placeholder="Enter Your Reply"
                        value={this.state.adrep} 
                        onChange={this.handleInputChange}/>
                    </div>



                   

                    <button  className="btn btn-dark" type="submit" style={{margintop:'15px'}} onClick={this.onSubmit}>
                    <i className="fa fa-check-square"></i>    
                    &nbsp; Submit Response  
                    </button>

            </form>
         </div>
        )

    }
}