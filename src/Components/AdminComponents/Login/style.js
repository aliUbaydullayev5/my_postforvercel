import styled from 'styled-components'

const Block = styled.div`
  border: 1px solid var(--lineColor);
  padding: 50px 5px;
  border-radius: 15px;
  max-width: 30%;
  height: 500px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  >input{
    width: 90%;
    padding: 5px 15px;
    font-size: 22px;
    border-radius: 15px;
  }
  >button{
    padding: 5px;
    height: 40px;
    width: 50%;
    font-size: 20px;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px){
    max-width: 50%;
  }
  @media screen and (max-width: 800px){
    max-width: 95%;
  }
`

export {Block}