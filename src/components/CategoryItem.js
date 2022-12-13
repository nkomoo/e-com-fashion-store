import styled from 'styled-components';

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`;

const Title = styled.h1`
color: white;
margin-bottom: 10px;
`;

const Button = styled.button`
background-color: white;
padding: 10px;
color: black;
border: none;
text-transform: uppercase;
cursor: pointer;
font-weight: 600;
`;




function CategoryItem({item}) {
  return (
    <Container>
       <Image  src={item.img} />
       <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
       </Info>
        </Container>
  )
}

export default CategoryItem