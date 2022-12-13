import styled from 'styled-components';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`;



const Image = styled.img`
    height: 75%;

`;

const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
/* background-color: black; */
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all .5s ease;
cursor: pointer;

&:hover{
    opacity: .3;
}

`;

const Title = styled.div`
 font-size: 14px;
 color: black;
 position: absolute;
 bottom: 10px;
 align-items: center;
 justify-content: center;
 text-transform: uppercase;
 margin-bottom: 10px;
`;

const Price = styled.div`
font-weight: bold;
font-size: 16px;
position: absolute;
bottom:0;
`;


function Product({item}) {
  return (
   <Container>
<Image src={item.img} />
<Info>
    {/* <Icon>
    <ShoppingCartTwoToneIcon />
    </Icon>
    <Icon>
    <SearchTwoToneIcon />
    </Icon>
    <Icon>
    <FavoriteBorderTwoToneIcon />
    </Icon> */}
    <Title>{item.title}</Title>
    <Price>{item.price}</Price>
</Info>
    </Container>
  )
}

export default Product

