import styled from 'styled-components';

const typeTextFunc = (type) => {
    switch (type) {
        case 'title':{
            return {
                fontSize: '32px',
                fontWeight: '600',
            }
            break
        }
        case 'subTitle':{
            return {
                fontSize: '26px',
                fontWeight: '400'
            }
            break
        }
        default: {
            return {
                fontSize: '18px',
                fontWeight: '400'
            }
        }
    }
}

const Block = styled.a`
  @media screen and (max-width: 800px){
    grid-row: 1/2;
  }
    padding: 10px;
  .blockColumn{
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
  }
`

const Text = styled.div`
  ${({type})=> typeTextFunc(type)} 
  text-align: ${({position})=> position ? position : 'start'};
  color: ${({color})=> color ? color : '#000'};
  margin-top: ${({top})=> top && top};
  margin-bottom: ${({bottom})=> bottom && bottom};
  margin-left: ${({left})=> left && left};
  margin-right: ${({right})=> right && right};
  width: ${({width})=> width && width};
  border: ${({border})=> border && '1px solid red'};
  font-weight: ${({fontWeight}) => fontWeight && `${fontWeight} !important`};
  >span{
    font-weight: 500;
  }
  >div{
    display: inline;
  }
`

Block.Skilss = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 20px;
  width: 60%;
  margin: auto;
  ul>li{
    margin: 10px 0; 
    font-size: 18px;
  }
`

Block.Contact = styled.div`
  font-size: 18px;
  >p{
    margin: 10px 0;
  }
`

export {Block, Text}
