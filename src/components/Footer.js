import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Container = styled.div`
display: inline-flex;
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


const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;


function Footer() {
  return (
   <Container>
    <Left>
        <Logo>CIAGA.</Logo>
        <Desc>Insert text here</Desc>
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
      <Title>Useful Links</Title>
      <List>
        <ListItem>Man's Fashion</ListItem>
        <ListItem>Woman's Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist </ListItem>
        
        <ListItem>Terms and Conditions</ListItem>
      </List>
    </Center>
    <Right>
      <Title>Contact</Title>
      <ContactItem>
56 Dove In, South Pacific 93455
      </ContactItem>
      <ContactItem>
+ 132  433 2345
      </ContactItem>
    </Right>
    </Container>
  )
}

export default Footer