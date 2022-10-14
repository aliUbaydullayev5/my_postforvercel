import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk('getPosts', async (payload)=> {
    return await fetch('https://preoject2.herokuapp.com/api/packPosts', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            post: payload.num
        })
    }).then((res)=> res.json())
})

export const PostsSlice = createSlice({
    name: 'Posts',
    initialState: {posts: [], status: null, numPackPosts: 7},
    extraReducers: {
        [getPosts.pending]: (state)=> {
            state.status = 'loading'
        },
        [getPosts.fulfilled]: (state, action)=> {
            state.status = 'success'
            state.posts = [...state.posts, ...action.payload]
        },
        [getPosts.rejected]: (state)=> {
            state.status = 'error'
        }
    }
})


export default PostsSlice.reducer