import React, {useState} from 'react'
import {Block} from "./style";
import axios from "axios";
import AdminAllPosts from "../AdminAllPosts";
import {getAllPosts} from "../../../Redux/allPosts";
import {useDispatch} from "react-redux";

const AdminPanel = ({changeAdmin}) => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState('')
    const dispatch = useDispatch()
    const pushPost = async () => {
        if (title.length && desc.length) {
            const rawResponse = await fetch('https://preoject2.herokuapp.com/api/addPost', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    img: img,
                    title: title,
                    desc: desc
                })
            })
            const content = await rawResponse.json();
            alert(content)
            setTitle('')
            setDesc('')
            setImg('')

        }else{
            alert('do not have Title, Desc')
        }
        dispatch(getAllPosts())
    }


    const logoutFunc = () => {
        localStorage.removeItem("token")
        changeAdmin(false)
    }

    return(
        <div>
            <Block>
                <h1>Admin Panel</h1>
                <input type={'text'} name={'img'} placeholder={'Img URL'} onChange={(e)=> setImg(e.target.value)} value={img} />
                <input type={'text'} name={'title'} placeholder={'Post Title'} onChange={(e)=> setTitle(e.target.value)} value={title} />
                <input type={'text'} name={'desc'} placeholder={'Post Description'} onChange={(e)=> setDesc(e.target.value)} value={desc} />
                <button onClick={()=> pushPost()} className={'pushButton'}>Push new Property</button>
                <button onClick={()=> logoutFunc()} className={'logButton'}>Logout</button>
            </Block>
            <AdminAllPosts />
        </div>
    )
}

export default AdminPanel