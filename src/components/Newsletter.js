import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
height: 50vh;
background-color: black;
color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`;

const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: grey;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;
`;

const Button = styled.button`
flex: 1;
background-color: white;
border: none;
cursor: pointer;
`;

const Input = styled.input`
border: none;
padding-left: 25px;
flex: 8;

`;

const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 15px;
`;


function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favourite brand</Description>
        <InputContainer>
        <Input placeholder="Your email" />
        <Button>
            <SendIcon />
        </Button>
        </InputContainer>
        </Container>
  )
}

export default Newsletter