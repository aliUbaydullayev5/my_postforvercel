import React from 'react';
import {Block} from "./style";

const Post = ({img, title, desc, time, uniqId}) => {
    const findDate = (dateNum) => {
        switch (dateNum[1]){
            case '1': {
                return `${dateNum[2]} Январь ${dateNum[0]}`
            }
            case '2': {
                return `${dateNum[2]} Февраль ${dateNum[0]}`
            }
            case '3': {
                return `${dateNum[2]} Март ${dateNum[0]}`
            }
            case '4': {
                return `${dateNum[2]} Апрель ${dateNum[0]}`
            }
            case '5': {
                return `${dateNum[2]} Май ${dateNum[0]}`
            }
            case '6': {
                return `${dateNum[2]} Июнь ${dateNum[0]}`
            }
            case '7': {
                return `${dateNum[2]} Июль ${dateNum[0]}`
            }
            case '8': {
                return `${dateNum[2]} Август ${dateNum[0]}`
            }
            case '9': {
                return `${dateNum[2]} Сентябрь ${dateNum[0]}`
            }
            case '10': {
                return `${dateNum[2]} Октябрь ${dateNum[0]}`
            }
            case '11': {
                return `${dateNum[2]} Ноябрь ${dateNum[0]}`
            }
            case '12': {
                return `${dateNum[2]} Декабрь ${dateNum[0]}`
            }
        }
    }
    return(
        <Block id={uniqId}>
            {img && <Block.Img src={img} />}
            <Block.Title className={'nocopy'}>
                <h1>{title}</h1>
                <p>{findDate(time.split('-').join('T').split('T').splice(0,3))}</p>
            </Block.Title>
            <Block.TextArea>{`${desc}`}</Block.TextArea>
        </Block>
    )
}

export default Post;