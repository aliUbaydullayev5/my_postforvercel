import styled from 'styled-components';
import { Image } from 'antd';


const Block = styled.div`
  //border-bottom: 1px solid var(--lineColor);
  border: 1px solid var(--lineColor);
  border-radius: 15px;
  min-height: 300px;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  @media screen and (max-width: 800px){
    padding: 15px 3px;
  }
`;

Block.Img = styled.div`
  height: 400px;
  background-image: url(${({src})=> src ? src : ''});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
`;
Block.Title = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px){
    padding: 0 10px;
  }
`;

Block.TextArea = styled.div`
  min-height: 50px;
  border-radius: 15px;
  background: var(--backBlock);
  padding: 10px 15px;
  line-height: 25px;

`;


export {Block};