import styled from 'styled-components';

const Block = styled.div`
  width: 100%;
  min-height: 500px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 15px;
  @media screen and (max-width: 800px){
    grid-template-columns: 1fr;
    grid-template-rows: 140px 1fr;
    grid-gap: 15px;
  }
`;

const LeftArea = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0px 15px 130px 15px;
  @media screen and (max-width: 800px){
    grid-row: 2/3;
    padding: 15px 5px 130px 5px;
  }
  .loading{
    margin: 30px auto;

  }
`;

const RightArea = styled.div`
  border: 1px solid var(--lineColor);
  border-radius: 15px;
  top: 90px;
  position: sticky;
  @media screen and (min-width: 800px){
    height: 400px;

  }
  @media screen and (max-width: 800px){
    grid-row: 1/2;
    position: inherit;

  }
`;

export {Block, LeftArea, RightArea}