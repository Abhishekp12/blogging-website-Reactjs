import './App.css';
import Navbar from './Header/Navbar';
import Home from './Home/Home' ;
import Footer from './footer/Footer';
import Createpost from './common/Createpost'
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <Router>  
    <div className="App">
    <Navbar />

<Route path="/" exact component={Home} />
<Route  path="/create-post" component={Createpost} />
<Footer />
    </div> 
    </Router>
    
  );
}

export default App;
