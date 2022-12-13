import styled from 'styled-components';
import {popularProducts} from '../data';
import Product from './Product';

const Container = styled.div`
/* padding: 20px; */
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`;

const Header = styled.h1`
text-transform: uppercase;
text-align: center;
  font-family: "Montserrat", sans-serif;
font-weight: 400;

`;

function Products() {
  return (
    <>
    <Header>Most Popular Right Now</Header>
    <Container>
{popularProducts.map(item=>(
    <Product item={item} key={item.id} />
))}
        </Container>
        </>
  )
}

export default Products