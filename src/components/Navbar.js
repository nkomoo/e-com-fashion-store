import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div`
 height: 40px;
color: black;
`;

const Wrapper = styled.div`
padding: 10px 20px; // left and right padding
display: flex;
align-items: center;
justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

// same size components

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
     border: 0.5px solid lightgray;
     align-items: center;
     display: flex;
     margin-left: 25px;
     padding: 5px;
`;

const Input = styled.input`
    border: none;
    outline: none;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
text-transform: uppercase;
`;

function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <SearchIcon />
                </SearchContainer>
            </Left>
            <Center><Logo>CIAGA.</Logo></Center>
            <Right>

            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem> 
            <Badge badgeContent={3} color="secondary">
      <ShoppingCartIcon color="action" />
    </Badge>
            </MenuItem>

            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar