import React from 'react'
import './Post.css' ;

const Post = ( { post , loading}) => {


  if(loading){
    return <h3>wait for a moment !</h3>
  }

  
    return (
      <div clasNames="container" >
        <div className="row"> 
        <ul className=" list-group mb-3 card-content  " >
{post.map( post=>(
  <li key={post.id}  className=" list-group-item">
    <div    className=" content "> 
    <div className=" sidegap "  ><h6>User random Id: {post.userId}</h6><br />
   <h6>Title : {post.title} </h6>  <br />
   <h6>Description: {post.body}  </h6>   </div> 

   </div>
  </li>
  
))}
</ul>

         </div>
      </div>



    )
}

export default Post;
