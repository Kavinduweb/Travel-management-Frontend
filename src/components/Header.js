import React from "react";


function Header(){

    return(
      <body >

<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <a class="navbar-brand" href="#">Home</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">About Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Services</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact Us</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="#">Gallery</a>
    </li>

    
    <i class="fas fa-user-alt" style={{color:"white"}} id="userprofile" href="/profile"></i>


  </ul>
</nav>

<div class="container-fluid">

</div>

</body>

    )

    
}

export default Header;