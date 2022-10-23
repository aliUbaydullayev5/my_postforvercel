import React, {useEffect, useState} from 'react';
import {Block, LeftArea, RightArea} from "./style";
import Loading from "../../LoadingCom";
import Post from "../../Post";
import {getPosts} from "../../../Redux/Posts";
import {useDispatch, useSelector} from "react-redux";
import { InView } from "react-intersection-observer";
import {changeQuantity} from "../../../Redux/quantityPosts";
import RightBlock from "../RightBlock";

const Main = () => {

    const posts = useSelector((store)=> store.posts)
    const quantityPosts = useSelector((store)=> store.quantityPosts)
    const dispatch = useDispatch()
    const [inView, setInView] = useState(false);


    useEffect(()=> {
        if (inView){
            dispatch(changeQuantity())
            dispatch(getPosts({num: quantityPosts.quantityPosts}))
        }
    }, [inView])


    return(
        <Block>
            <LeftArea onChange={setInView}>
                {posts?.posts?.map((value)=> (
                    <div key={value?._id} >
                        <Post img={value?.img} title={value?.title} desc={value?.desc} time={value?.time} uniqId={value?._id}  />
                    </div>
                ))}
                <InView onChange={setInView} />
                {posts?.status === 'loading' && <div style={{display: 'flex', justifyContent: 'center', padding: '10px'}}><Loading type={'bars'} color={'#000'} /></div>}
            </LeftArea>
            <RightArea>
                <RightBlock />
            </RightArea>
        </Block>
    )
}
export default Main;