import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import './Createpost' ;

const Createpost = () => {

    let history = useHistory();
  const [user, setUser] = useState({
     title: "",
    body: "",    
  });
  const { title, body} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://jsonplaceholder.typicode.com/posts", user);
    history.push("/");
  };

    return (
        <>
<div className=" container mt-5  mb-3 cposition ">
        <div className="formdiv mt-5">
            <h5 className="create-head ">Write your blog</h5>
            <form  onSubmit={e => onSubmit(e) }>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="enter the title"  required 
                onChange={e => onInputChange(e)} name="title"  value={title} />
            </div>

            <div className="form-group">
                <textarea  className="form-control" placeholder="enter the description" 
                 rows="15" cols="20"    name="body" value={body}  required  
                 onChange={e => onInputChange(e)}  />
            </div>
             <button className="btn btn-info w-2 btn-block">Submit Post</button>

            </form>
        </div>

    </div>
    </>

    )
}

export default Createpost
