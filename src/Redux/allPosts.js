import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getAllPosts = createAsyncThunk('getPosts', async ()=> {
    return await fetch('https://preoject2.herokuapp.com/api/posts', )
        .then((res)=> res.json())
})

export const deletePost = createAsyncThunk('deletePost', async (payload)=> {
    return await fetch('https://preoject2.herokuapp.com/api/deletePost', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type":"application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify({
            productId: payload.id
        })
    }).then((res)=> res.json())
})

export const AllPostsSlice = createSlice({
    name: 'AllPosts',
    initialState: {posts: [], status: null,},
    extraReducers: {
        [getAllPosts.pending]: (state)=> {
            state.status = 'loading'
        },
        [getAllPosts.fulfilled]: (state, action)=> {
            state.status = 'success'
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state)=> {
            state.status = 'error'
        },
    }
})


export default AllPostsSlice.reducer