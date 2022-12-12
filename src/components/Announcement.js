import styled from 'styled-components';

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
text-align: center;
justify-content: center;
font-size: 14px;
font-weight: bold;
padding-top: 5px;
font-family: 'Freizeit 130', sans-serif;

`;

function Announcement() {
  return (
    <Container>
        Super deals coming before New Years!
    </Container>
  );
};

export default Announcement