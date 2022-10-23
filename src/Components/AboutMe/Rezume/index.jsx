import React from 'react'
import {Block} from "./style";
import resume from '../../../Assets/resume.jpg'
import pdfResume from '../../../Assets/resumePdf.pdf'

const Resume = () => {
    return(
        <Block>
            <img src={resume} />
            <a href={pdfResume} download>Download PDF Resume</a>
        </Block>
    )
}

export default Resume