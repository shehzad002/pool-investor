import React, { useState } from 'react'; 
import logo from './metamask.png';
import './css/bootstrap.css';



function App() {
	const ethereum = window.ethereum
    const [addr,setAddr] = useState('')


if(ethereum) {
	ethereum.on('accountsChanged', function (accounts) {
  setAddr(accounts[0]);
});
}

const mystyle = {
      color: "white",
      
      padding: "10px",
      fontFamily: "Arial",
	  "text-align": "center"
    };
	
  return (
   <body>
 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Ethereum Pool Investor</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

 
</nav>
  <div className="container">
 <center>  <img src={logo} alt="logo" style={{width: "100px"}}/> 
   {ethereum && <p style={{color: "#fff"}}>Connected <br />Your Ethereum Address: {addr}</p> }
   {ethereum && <h1 style={mystyle}>How many Pools You have Invested</h1>}
	   {ethereum &&     <table className="table">
   <thead>
    <th>Amount</th>
	<th>Pool</th>
	 </thead>
	 
	 <tbody>
	  <tr>
	  <td>Progress</td>
	   <td>Progress</td>
	   </tr>
	   </tbody>
    </table>
	 }
		   {!ethereum && <p className="myText">Not Connected <br />Connect Your MetaMask</p>}
			   
  
 
      </center>
        
     
	  </div>
	  </body>
   
  );
}

export default App;
