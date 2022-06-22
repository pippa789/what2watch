import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



const Nav = styled.div`
display:flex;
flex-direction: flex-row;
justify-content: space-around;
margin: 0px;
padding: 0px
align-items: center;
height: 50px;
width: 100%;
background-color: black;
font-family: 'Poppins', sans-serif;
`;
function Navigation() {
    
    const LinkStyle = ({isActive}) => {
        return {
    // fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'black' : 'white',
        listStyle: 'none',
        textDecoration: 'none',
        padding:'0px 100px 0px 100px',
        
        }
    }  
   
    const navStyle = { 
    display:"flex",
    flexDirection: "flex-row",
    alignItems: 'center',
    padding: '10px',
    margin: "0px",
    listStyle: "none",
   };
  
  return (
    <Nav>
        <ul style={navStyle}>
            <li>
            <NavLink style={LinkStyle}  to="/">Home</NavLink>
            </li>
        
            <li>
                <NavLink style={LinkStyle} to="/About">About</NavLink>
            </li>   
            {/* <li>
                <NavLink style={LinkStyle} to="/Projects">Projects</NavLink>
            </li>    */}
        </ul>
    </Nav> 
      
  )
  }

export default Navigation