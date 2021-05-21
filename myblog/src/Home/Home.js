import React,{useEffect, useState} from 'react'
import   './Home.css';
import axios from 'axios';
import Post from '../common/Post' ;
import Pagination from '../Pagination/Pagination'

const Home = () => {

  const[post , setPost] = useState([]);
  const[currentPage , setCurrentPage] = useState(1);
  const[loading , setLoading] = useState(false);
  const[postPerPage ]= useState(10);


  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

useEffect( ()=>{
  const fetchdata = async()=>{
    const res =await axios.get(" https://jsonplaceholder.typicode.com/posts ");
    setLoading(true);
    setPost(res.data);

    setLoading(false);
  }
fetchdata();
} , [setPost] );


  const divStyle = {
    height: "100%",
    backgroundImage: "url(/assests/heroblogger.jpg )"
  };

    return (
       <div className=" container-fluid " >  
       <div className="tow"> 
        <div  className="hero-sectionbg sm-12"   style={divStyle} >
          <h5 className="hero-head">Welcome to my Ninja Blog website</h5>  
        </div>
        <div  className=" blog-section sm-12">
          <h2 className="text-black  text-capatalize  p-3 ml-2 mr-2 ">You're welcome to my blog</h2>
           <Post   post={currentPost}  loading={loading} />
           <Pagination  postPerPage={postPerPage}  totalPost={post.length}  paginate={paginate} />
        </div>
        </div>
        </div>
    )
}

export default Home;
