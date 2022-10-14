import React, {useState} from 'react'
import {Block} from "./style";

const AdminPanel = ({changeAdmin}) => {

    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const pushPost = async () => {
        if (img.length && title.length && desc){
            const rawResponse = await fetch('https://preoject2.herokuapp.com/api/addPost', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    img: img,
                    title: title,
                    desc: desc
                })
            })
            const content = await rawResponse.json();
            if(content?.message && content?.message === 'Success fully saved') {
                alert('Success fully saved your post')
                setImg('')
                setTitle('')
                setDesc('')
            }
        }else{
            alert('you have to top up all "inputs"')
        }

    }

    const logoutFunc = () => {
        localStorage.removeItem("token")
        changeAdmin(false)
    }

    return(
        <Block>
            <h1>Admin Panel</h1>
            <input type={'text'} placeholder={'Img URL'} onChange={(e)=> setImg(e.target.value)} value={img} />
            <input type={'text'} placeholder={'Post Title'} onChange={(e)=> setTitle(e.target.value)} value={title} />
            <input type={'text'} placeholder={'Post Description'} onChange={(e)=> setDesc(e.target.value)} value={desc} />
            <button onClick={()=> pushPost()} className={'pushButton'}>Push new Property</button>
            <button onClick={()=> logoutFunc()} className={'logButton'}>Logout</button>
        </Block>
    )
}

export default AdminPanel