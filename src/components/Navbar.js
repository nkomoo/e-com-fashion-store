import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from '../Responsive';

const Container = styled.div`
position: sticky;
 height: 60px;
color: black;
 
`;

const Wrapper = styled.div`
padding: 10px 20px; // left and right padding
display: flex;
align-items: center;
justify-content: space-between;
${mobile({padding:"10px 0px"})}
`;

const Left = styled.div`
flex: 2;
display: flex;
align-items: center;
${mobile({flex:"1"})}
`;

const Center = styled.div`
flex: 1;
/* text-align: center; */
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({justifyContent:"center", flex:"2"})}

`;

// same size components

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
     border: 0.5px solid lightgray;
     align-items: center;
     display: flex;
     margin-left: 25px;
     padding: 5px;
     ${mobile({marginLeft:"10px"})}
`;

const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({width:"50px"})}
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px", paddingLeft:"15px"})}
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
text-transform: uppercase;
${mobile({fontSize:"12px", marginLeft:"10px"})}
`;

const Links = styled.div`
display: flex;
/* flex: 1; */
-webkit-flex: none; 
justify-content: center;
align-items: center;
padding-left: 20px;
margin: 0;
${mobile({display:"none"})}
`;

const NavList = styled.li`
list-style: none;
cursor: pointer;
text-transform: uppercase;

&:hover {
    text-decoration: underline;
}
`;

const BadgeStyle = {
    "& .MuiBadge-badge": {
    color: 'white',
    backgroundColor: '#000000',
  }
}

function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search' />
                    <SearchIcon />
                </SearchContainer>
                <Links>
                        <NavList>All Products</NavList>
                </Links>
                <Links>
                        <NavList>About</NavList>
                </Links>
            </Left>
            <Center><Logo>CIAGA</Logo></Center>
            <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem> 
            <Badge badgeContent={3} color="secondary" sx={BadgeStyle} >
      <ShoppingCartIcon color="action" />
    </Badge>
            </MenuItem>

            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar