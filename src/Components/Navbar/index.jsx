import React, {Fragment} from 'react'
import {Block, Navlink} from "./style";
import {Outlet} from 'react-router-dom';

const Navbar = () => {
    return(
        <Fragment>
            <Block>
                <div className={'left'}>
                    <span className={'nocopy'}>
                        <a href={'/home'}>My Post</a>
                    </span>
                </div>
                <div className={'center nocopy'}>
                    <Navlink to={'home'}>Home</Navlink>
                    <Navlink to={'about'}>About Me</Navlink>
                </div>
            </Block>

            <Outlet />
        </Fragment>
    );
};

export default Navbar;