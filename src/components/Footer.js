import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Container = styled.div`
display: flex;
height: 60vh;
background-color: rgb(238,237,237);
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Right = styled.div`
flex: 1;
padding: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;



function Footer() {
  return (
   <Container>
    <Left>
        <Title>We are Ciaga</Title>
        <List>
          <ListItem>About us</ListItem>
          <ListItem>Ciaga Talks</ListItem>
          <ListItem>Contact us</ListItem>
          <ListItem>Newsletter Sign up</ListItem>
          <ListItem>Student Discount</ListItem>
          </List>
        <SocialContainer>
<SocialIcon>
<InstagramIcon />
</SocialIcon>
<SocialIcon>
<FacebookIcon />
</SocialIcon>
        </SocialContainer>
    </Left>
    <Center>
      <Title>Your Order</Title>
      <List>
        <ListItem>Orders & Delivery</ListItem>
        <ListItem>Returns & Refunds</ListItem>
        <ListItem>Product & Stock</ListItem>
        <ListItem>Pre-order</ListItem>
      </List>
    </Center>
    <Right>
      <Title>Quick Links</Title>
      <List>
        <ListItem>Terms & Conditions</ListItem>
        <ListItem>Privacy</ListItem>
        <ListItem>Klarna</ListItem>
        <ListItem>Careers</ListItem>
        
      </List>
    </Right>
    </Container>
  )
}

export default Footer