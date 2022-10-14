import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Block = styled.div`
  width: 100%;
  height: 80px;
  background: var(--backBlock);
  border-bottom: 1px solid var(--lineColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--mainPadding);
  gap: 25px;
  margin-bottom: 20px;
  position: fixed;
  top: 0;
  z-index: 999;
  >div{
    max-width: 300px;
    width: 300px;
  }
  .left{
    font-family: 'Silkscreen', cursive;
    font-size: 32px;
    a{
      text-decoration: none;
      color: #000;
    }
    >span{
      cursor: pointer;
    }
  }
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    gap: 35px;
    .active{
      font-weight: 700;
    }
    >span{
      cursor: pointer;
    }
  }
  
  @media screen and (max-width: 800px){
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    .left{
      font-family: 'Silkscreen', cursive;
      font-size: 32px;
      display: flex;
      justify-content: center;
      
      >span{
        cursor: pointer;
      }
      
    }
  }
  
  
`;


const Navlink = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;

export {Block, Navlink}