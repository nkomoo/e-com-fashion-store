import styled from 'styled-components';

const Container = styled.div`
height: 30px;
background-color: rgb(139,122,146);
opacity: .4;
color: white;
display: flex;
text-align: center;
justify-content: center;
font-size: 14px;
font-weight: bold;
padding-top: 5px;

`;

function Announcement() {
  return (
    <Container>
        Super deals coming before New Years!
    </Container>
  );
};

export default Announcement