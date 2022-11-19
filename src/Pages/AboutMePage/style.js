import styled from 'styled-components';


const Block = styled.div`
  border: 1px solid var(--lineColor);
  width: 85%;
  min-height: 400px;
  margin: 0px auto;
  border-radius: 15px;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  @media screen and (max-width: 800px){
    grid-template-columns: 1fr;
  }

`;


export {Block}