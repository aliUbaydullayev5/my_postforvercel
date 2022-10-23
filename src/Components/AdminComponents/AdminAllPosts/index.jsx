import React, {useEffect, useState} from 'react'
import {Block} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, getAllPosts} from "../../../Redux/allPosts";

const AdminAllPosts = () => {


    const posts = useSelector((store)=> store.allPostsSlice)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllPosts())
    }, [])

    const deletePostFunc = (id) => {
        dispatch(deletePost({id}))
        setTimeout(()=> {
            dispatch(getAllPosts())
        }, 1000)
    }

    return(
        <Block>
            {posts.status === 'success' &&
                <Block.Inset>
                    {posts?.posts.map((value)=> (
                        <Block.Post key={value._id}>
                            <h1>{value.title}</h1>
                            <p>{value._id}</p>
                            <button onClick={()=> deletePostFunc(value._id)}>Delete Post</button>
                        </Block.Post>
                    ))}
                </Block.Inset>
            }
        </Block>
    )
}


export default AdminAllPosts