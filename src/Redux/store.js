import {configureStore} from '@reduxjs/toolkit'
import Posts from './Posts'
import quantityPosts from "./quantityPosts";
import AllPostsSlice from "./allPosts";


export default configureStore({
    reducer: {
        posts: Posts,
        quantityPosts: quantityPosts,
        allPostsSlice: AllPostsSlice
    }
})