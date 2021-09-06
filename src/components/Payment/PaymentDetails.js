import React, {Component} from 'react';
import axios from 'axios';

export default class PaymentDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            payment:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8070/payment/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    payment:res.data.payment
                });

                console.log(this.state.payment);
            }
        });
    }
    render(){

        const{reference,name,payf,method,card,time,no,amount} = this.state.payment;
        return(
            <div style={{marginTop:'20px'}}>
                <h4>{card}</h4>
                 <hr/>
                 <dl className="row">
                     <dt className="col-sm-3">Reference</dt>
                     <dd className="col-sm-9">{reference}</dd>
                     <dt className="col-sm-3">Name</dt>
                     <dd className="col-sm-9">{name}</dd>
                     <dt className="col-sm-3">Paid for</dt>
                     <dd className="col-sm-9">{payf}</dd>
                     <dt className="col-sm-3">Method</dt>
                     <dd className="col-sm-9">{method}</dd>
                     <dt className="col-sm-3">Date</dt>
                     <dd className="col-sm-9">{time}</dd>
                     <dt className="col-sm-3">CVV</dt>
                     <dd className="col-sm-9">{no}</dd>
                     <dt className="col-sm-3">Amount</dt>
                     <dd className="col-sm-9">{amount}</dd>
                     

                 </dl>
            </div>
        )
    }
}
