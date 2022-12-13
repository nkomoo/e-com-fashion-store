import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
height: 50vh;
background-color: rgb(84,89,95);
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
outline: none;

`;

const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 15px;
`;

const SmallParagraph = styled.div`
font-size: 10px;
text-align: center;
margin-left: 130px;
margin-right: 130px;
margin-bottom: 30px;
`;


function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favourite brand</Description>
        <SmallParagraph>By entering your phone number and submitting this form, you consent to receive marketing text messages (such as promotion codes and cart reminders) from We are CIAGA at the number provided, including messages sent by autodialer. Consent is not a condition of any purchase. Message and data rates may apply. Message frequency varies. You can unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available) in one of our messages. </SmallParagraph>
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