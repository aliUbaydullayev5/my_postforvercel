import {configureStore} from '@reduxjs/toolkit'
import Posts from './Posts'
import quantityPosts from "./quantityPosts";


export default configureStore({
    reducer: {
        posts: Posts,
        quantityPosts: quantityPosts
    }
})