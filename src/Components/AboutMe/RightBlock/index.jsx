import React from 'react'
import {Block, Text} from "./style";

const RightBlock = () => {
    return(
        <Block>
            <Text type={'title'} position={'center'} top={'30px'} bottom={'20px'} >About <Text type={'title'} color={'#333'}>Ali</Text></Text>
            <div className={'blockColumn'}>
                <Text fontWeight={'600'} position={'end'}>Имя:&nbsp;&nbsp;&nbsp;</Text>
                <Text fontWeight={'600'} color={'#333'}>&nbsp;Мухаммадали Убайдуллаев</Text>

                <Text fontWeight={'600'} position={'end'}>Дата рождения:&nbsp;&nbsp;&nbsp;</Text>
                <Text fontWeight={'600'} color={'#333'}>&nbsp;2 Марта, 2005 Года</Text>

                <Text fontWeight={'600'} position={'end'}>Место рождения:&nbsp;&nbsp;&nbsp;</Text>
                <Text fontWeight={'600'} color={'#333'} bottom={'40px'}>&nbsp;Андижан</Text>
            </div>

            <Text type={'title'} position={'center'} top={'30px'} bottom={'20px'} >Где учился</Text>

            <div className={'blockColumn'}>
                <Text fontWeight={'600'} position={'end'}>Наманган:&nbsp;&nbsp;&nbsp;</Text>
                <Text fontWeight={'600'} color={'#333'}>&nbsp;IT school 2019/2020</Text>

                <Text fontWeight={'600'} position={'end'}>Андижан:&nbsp;&nbsp;&nbsp;</Text>
                <Text fontWeight={'600'} color={'#333'}>&nbsp;Self Study 2020/2021</Text>

                <Text fontWeight={'600'} position={'end'}>Ташкент:&nbsp;&nbsp;&nbsp;</Text>
                <Text fontWeight={'600'} color={'#333'}>&nbsp;WebBrain academy 2021/2022</Text>

                <Text fontWeight={'600'} position={'end'}>&nbsp;&nbsp;&nbsp;</Text>
                <Text fontWeight={'600'} color={'#333'}>&nbsp;</Text>
            </div>

            <Text type={'title'} position={'center'} top={'30px'} bottom={'20px'} >Skills</Text>

            <Block.Skilss>
                <ul>
                    <li>React</li>
                    <li>React Hooks</li>
                    <li>Redux</li>
                    <li>Redux Toolkit</li>
                    <li>Redux Thunk</li>
                    <li>Redux Saga</li>
                    <li>RestAPI</li>
                    <li>React Formik</li>
                    <li>Next js</li>
                    <li>Bootstrap</li>
                    <li>Figma</li>
                    <li>GitHub</li>
                    <li>BEM</li>
                </ul>
                <ul>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Node js</li>
                    <li>Express js</li>
                    <li>Mongo db</li>
                    <li>Html & Css</li>
                    <li>Antd UI</li>
                    <li>Material UI</li>
                    <li>Styled-Components</li>
                    <li>SASS</li>
                    <li>SCSS</li>
                    <li>Linux</li>
                    <li>Mentor</li>
                </ul>
            </Block.Skilss>
            <Block.Contact>
                <Text type={'title'} position={'center'} top={'20px'} bottom={'10px'}>Contact</Text>
                <p>Email address : <a href="mailto: mukhammadali.ubaydullayev@gmail.com">mukhammadali.ubaydullayev@gmail.com</a></p>
                <p>Email address : <a href="mailto: mukhammadali.ubaydullayev.05@inbox.ru">mukhammadali.ubaydullayev.05@inbox.ru</a></p>
                <p>Tel number : <a href="tel:950797740">+998 95 079 77 40</a></p>
                <p>Tel number : <a href="tel:332407740">+998 33 240 77 40</a></p>
                <p>Telegram : <a href="https://t.me/auu05">t.me/auu05</a></p>
                <p>Telegram : <a href="https://t.me/auu_05">t.me/auu_05</a></p>
            </Block.Contact>
        </Block>
    )
}

export default RightBlock
