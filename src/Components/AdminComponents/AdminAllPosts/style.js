import styled from 'styled-components'


const Block = styled.div`
  border: 1px solid var(--lineColor);
  border-radius: 15px;
  margin: 40px auto;
  max-width: 80%;
  min-height: 300px;
  padding: 15px;
  @media screen and (max-width: 800px){
    max-width: 95%;
  }
  button{
    padding: 5px;
    height: 40px;
    min-width: 50%;
    font-size: 20px;
    cursor: pointer;
    white-space: nowrap;
  }
`

Block.Inset = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  @media screen and (max-width: 800px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 550px){
    grid-template-columns: 1fr;
  }
`
Block.Post = styled.div`
  border: 2px solid var(--lineColor);
  border-radius: 15px;
  padding: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`
export {Block}