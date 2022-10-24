import React from 'react'
import {Block} from "./style"
import {useNavigate} from "react-router-dom";

const RightBlock = () => {

    const navigate = useNavigate()

    return(
        <Block>
            <Block.Top>
                <Block.TopPhoto />
            </Block.Top>
            <Block.Bottom>
                <h2>MukhammadAli</h2>
                <h2>Ubaydullayev</h2>
                <h3>Frontend developer</h3>
                <h4 onClick={()=> navigate('/about')}>About me</h4>
                <p> Version 0.3</p>
            </Block.Bottom>
        </Block>
    )
}


export default RightBlock
