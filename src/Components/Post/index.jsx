import React from 'react';
import {Block} from "./style";

const Post = ({img, title, desc, time, uniqId}) => {
    return(
        <Block id={uniqId}>
            {img && <Block.Img src={`https://preoject2.herokuapp.com/${img}`} />}
            <Block.Title className={'nocopy'}>
                <h1>{title}</h1>
                <p>{time}</p>
            </Block.Title>
            <Block.TextArea>{`${desc}`}</Block.TextArea>
        </Block>
    )
}

export default Post;