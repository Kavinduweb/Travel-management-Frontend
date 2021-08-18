import React, {Component} from 'react';
import axios from "axios";
import css from '../Styles/Home.module.css';

import img1 from '../Images/z1.jpg';



export default class HomePage extends Component {



render(){

  return(
 <div>
     <br></br>
<div class={css.slideshowcontainer}>
<h1 className ="text- mb-10">Dream Travelers</h1>
      <hr/>   <br></br>

<div class={css.myfade}>
  <div class={css.numbertext} style={{width:'100%'}}>1 / 3</div>
  <img src={img1} style={{width:'100%'}}/>
  <div class={css.text}>Farming Method</div>
</div>
<br></br>
<div style={{textAlign:'center'}}>
  <span class={css.dot}></span> 
  <span class={css.dot}></span> 
  <span class={css.dot}></span> 
</div>
</div>
<br></br>
<p> With its vibrant orange sunsets, endless beaches, abundant wildlife, and spiced curries, tales of adventures in Sri Lanka will linger 
    on your lips for years to come. From the golden beaches of Bentota and marvellous marine life in Mirissa to the colonial charm of Galle 
    and the rocky ruins of Sigiriya, there's something for everyone. Whether you're after a romantic honeymoon or a backpacking escapade, for
     3 days or two weeks, the Teardrop of India is warm and welcoming. Don't miss the budget-friendly safaris at Yala and Udawalawe, or the most 
     scenic train ride of your life from Kandy to the lush green highlands of Ella!<br></br> <br></br>
     With its vibrant orange sunsets, endless beaches, abundant wildlife, and spiced curries, tales of adventures in Sri Lanka will linger 
    on your lips for years to come. From the golden beaches of Bentota and marvellous marine life in Mirissa to the colonial charm of Galle 
    and the rocky ruins of Sigiriya, there's something for everyone. Whether you're after a romantic honeymoon or a backpacking escapade, for
     3 days or two weeks, the Teardrop of India is warm and welcoming. Don't miss the budget-friendly safaris at Yala and Udawalawe, or the most 
     scenic train ride of your life from Kandy to the lush green highlands of Ella!<br></br> <br></br>
     With its vibrant orange sunsets, endless beaches, abundant wildlife, and spiced curries, tales of adventures in Sri Lanka will linger 
    on your lips for years to come. From the golden beaches of Bentota and marvellous marine life in Mirissa to the colonial charm of Galle 
    and the rocky ruins of Sigiriya, there's something for everyone. Whether you're after a romantic honeymoon or a backpacking escapade, for
     3 days or two weeks, the Teardrop of India is warm and welcoming. Don't miss the budget-friendly safaris at Yala and Udawalawe, or the most 
     scenic train ride of your life from Kandy to the lush green highlands of Ella!<br></br> <br></br>With its vibrant orange sunsets, endless beaches, abundant wildlife, and spiced curries, tales of adventures in Sri Lanka will linger 
    on your lips for years to come. From the golden beaches of Bentota and marvellous marine life in Mirissa to the colonial charm of Galle 
    and the rocky ruins of Sigiriya, there's something for everyone. Whether you're after a romantic honeymoon or a backpacking escapade, for
     3 days or two weeks, the Teardrop of India is warm and welcoming. Don't miss the budget-friendly safaris at Yala and Udawalawe, or the most 
     scenic train ride of your life from Kandy to the lush green highlands of Ella!<br></br> <br></br>With its vibrant orange sunsets, endless beaches, abundant wildlife, and spiced curries, tales of adventures in Sri Lanka will linger 
    on your lips for years to come. From the golden beaches of Bentota and marvellous marine life in Mirissa to the colonial charm of Galle 
    and the rocky ruins of Sigiriya, there's something for everyone. Whether you're after a romantic honeymoon or a backpacking escapade, for
     3 days or two weeks, the Teardrop of India is warm and welcoming. Don't miss the budget-friendly safaris at Yala and Udawalawe, or the most 
     scenic train ride of your life from Kandy to the lush green highlands of Ella!
</p>


</div>

  )
}
}