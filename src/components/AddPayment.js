import React, {useState} from "react"
import axios from "axios";


export default function AddPayment(){

  const [reference, setReference]= useState("");
  const [name, setName]= useState("");
  const [payf, setPay]= useState("");
  const [method, setCard]= useState("");
  const [card, setNo]= useState("");
  const [time, setTime]= useState("");
  const [no, setCode]= useState("");
  const [amount, setAmount]= useState("");

  function sendData(e){
    e.preventDefault();
    
    const newPayment ={
      reference,
      name,
      payf,
      method,
      card,
      time,
      no,
      amount

    }

    axios.post("http://localhost:8070/payment/add", newPayment).then(()=>{
      alert("Payment Added")
      
      
    }).catch((err=>{
      alert(err)
    })

  )}


    return(
      <div className="container">
            <form onSubmit={sendData}>
  <div className="mb-3">
    <label for="reference" >Reference</label>
    <input type="text" className="form-control" id="reference" placeholder="Enter reference"
    onChange={(e)=>{

      setReference(e.target.value);
    }}/>
    
  </div>
  <div className="mb-3">
  <label for="name" >payer name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter Payer name"
    onChange={(e)=>{

      setName(e.target.value);
    }}/>
  </div>

  <div>
  <label for="pay"> Pay For</label>

  <select  className="form-select" aria-label="Default select example" onChange={(e)=>{
    const selectedto = e.target.value;
    setPay(selectedto)


  }}>
  <option value="Hotel Booking">Hotel Booking</option>
  <option value="Travel Package Booking">Travel Package Booking</option>
  <option value="Equipment Renting">Equipment Renting</option>

  </select>
  

  </div>

  <div className="form-check">
  <p>Card Type  </p>
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={method==="Visa"}
  value="Visa"
  onChange={(e)=>{setCard(e.target.value)}}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Visa
  </label>
</div>
<div classname="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"checked={method==="MasterCard"}
  value="MasterCard"
  onChange={(e)=>{setCard(e.target.value)}}/>
  <label class="form-check-label" for="flexRadioDefault2">
    MasterCard
  </label>
</div>

<div className="form-group">
    <label>CARD NUMBER</label>
        
       <input type="number" className="form-control" placeholder="Valid Card Number"
       onChange={(e)=>{

        setNo(e.target.value);
      }} />
              <span className="input-group-addon"><span className="fa fa-credit-card"></span></span>
          </div>
          <div className="form-group">
            <label><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label>
             <input type="text" className="form-control" placeholder="MM / YY" 
             onChange={(e)=>{

              setTime(e.target.value);
            }}/>
          </div>  
          <div className="form-group">
                 <label>CV CODE</label>
                    <input type="number" className="form-control" placeholder="CVC" 
                    onChange={(e)=>{

                      setCode(e.target.value);
                    }}/>
                </div>   

          <div className="mb-3">
            <label for="price">Amount</label>
            <input type = "number"  className="form-control" id="price" placeholder="Enter Amount" 
            onChange={(e)=>{

              setAmount(e.target.value);
            }}/>
            </div>         


  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}