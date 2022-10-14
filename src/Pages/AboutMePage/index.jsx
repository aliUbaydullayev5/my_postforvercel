import React from 'react';
import {Block} from "./style";
import Resume from "../../Components/AboutMe/Rezume";
import RightBlock from "../../Components/AboutMe/RightBlock";

const AboutMePage = () => {
    return(
        <Block>
            <Resume />
            <RightBlock />
        </Block>
    )
}

export default AboutMePage