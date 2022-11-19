import React, {useState} from 'react'
import {Block} from "./style";
import axios from "axios";
import AdminAllPosts from "../AdminAllPosts";
import {getAllPosts} from "../../../Redux/allPosts";
import {useDispatch} from "react-redux";

const AdminPanel = ({changeAdmin}) => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState()

    const dispatch = useDispatch()

    const pushPost = async () => {

        if (title.length && desc.length) {

            let formData = new FormData()

            formData.append("img", img)
            formData.append("title", title)
            formData.append("desc", desc)



            await axios({
                method: "post",
                url: "https://preoject2.herokuapp.com/api/addPost",
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
                .then((res)=> {
                    alert(res.data)
                    setTitle('')
                    setDesc('')
                })

        }else{
            alert('do not have Title, Desc')

        }
        dispatch(getAllPosts())
    }

    const handleFileSelect = (e) => {
        setImg(e.target.files[0])
    }

    const logoutFunc = () => {
        localStorage.removeItem("token")
        changeAdmin(false)
    }

    return(
        <div>
            <Block>
                <h1>Admin Panel</h1>
                <input type={'file'} name={'img'} placeholder={'Img URL'} onChange={(e)=> handleFileSelect(e)} />
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
