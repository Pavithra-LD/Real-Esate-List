import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/producrList';
import backimage from './components/real-estate.jpg'

function App() {
  return (
    <div >
      <div className="row">    
        <div className="flex-container">   
          <h1 className="col-md-9" style={{color:"white",fontFamily:"cursive",marginLeft:"30px"}}><b>Dream Home</b></h1>         
          <div className="col-md-3">
            <Navbar/>
          </div>

        </div>
       
      </div>

      <ProductList/>
    </div>
  );
}

export default App;
