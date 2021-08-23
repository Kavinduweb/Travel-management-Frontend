import React,{Component} from 'react'

export default class Images extends Component{

render(){
return(
 <div>

<h1>File Uploading</h1>

<form action="/single" method="POST" enctype="multipart/form-data" >
<input type="file" name ="image" />
<button type ="submit">Submit</button>




</form>




 </div>
)

}

} 