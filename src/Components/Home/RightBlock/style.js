import styled from 'styled-components'
import myPhoto from '../../../Assets/me.jpg'

const Block = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 15px;
  @media screen and (max-width: 800px){
    padding: 3px;
    grid-template-columns: 0.7fr 1fr;
    grid-template-rows: 1fr;
  }
`

Block.Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
Block.TopPhoto = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${myPhoto});
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 250px;
  @media screen and (max-width: 800px){
    width: 120px;
    height: 120px;
    background-size: cover;
  }
`
Block.Bottom = styled.div`
  position: relative;
  z-index: 0;
  h2{
    color: #4a4a4a;
  }
  h3{
    font-weight: 300;
  }
  h4{
    font-weight: 400;
    margin: 10px 0;
    text-decoration: underline;
  }
  h4:hover{
    color: blue;
    font-weight: 500;
    cursor: pointer;
  }
  p{
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #333;
  }
`



export {Block}