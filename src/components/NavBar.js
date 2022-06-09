import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Nav = styled.div`
height: 50px;
width: auto;
background-color: black;
font-family: 'Poppins', sans-serif;
`




function Navigation() {
    const LinkStyle = {
    color: "white",
    margin: "20px",
    textDecoration: "none",
    display: 'flex',
    alignItems: 'center'
};

    const navStyle = { 
    display: "flex",  
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center", 
    margin: "0px",
};   

  return (
      <Nav>
          <ul style={navStyle}>
              <li>
                  <Link style={LinkStyle} to="/">Home</Link>
              </li>  
              <li>
                  <Link style={LinkStyle} to="/About">About</Link>
              </li>   
          </ul>
      </Nav> 
      
  )
}

export default Navigation




//REACT ROUTER BASIC NAVBAR
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }





