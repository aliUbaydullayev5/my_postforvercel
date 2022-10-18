import React, {useState} from 'react'
import {Block} from "./style";
import axios from "axios";

const AdminPanel = ({changeAdmin}) => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState(null)

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
            console.log(content)

        }else{
            alert('do not have Title, Desc')
        }
    }


    const logoutFunc = () => {
        localStorage.removeItem("token")
        changeAdmin(false)
    }

    return(
        <Block>
            <h1>Admin Panel</h1>

            <input type={'text'} name={'img'} placeholder={'Img URL'} onChange={(e)=> setImg(e.target.value)} />
            <input type={'text'} name={'title'} placeholder={'Post Title'} onChange={(e)=> setTitle(e.target.value)} value={title} />
            <input type={'text'} name={'desc'} placeholder={'Post Description'} onChange={(e)=> setDesc(e.target.value)} value={desc} />
            <button onClick={()=> pushPost()} className={'pushButton'}>Push new Property</button>
            <button onClick={()=> logoutFunc()} className={'logButton'}>Logout</button>
        </Block>
    )
}

export default AdminPanel


//
//
// addFile(event) {
//     var formData = new FormData();
//     formData.append("file", event.target.files[0]);
//     formData.append('name', 'some value user types');
//     formData.append('description', 'some value user types');
//     console.log(event.target.files[0]);
//
//     fetch(`http://.../gallery/${path}`, {
//         method: 'POST',
//         headers: {'Content-Type': 'multipart/form-data'},
//         body: {event.target.files[0]}
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             this.setState({images: data.images, isLoading: false});
//             this.props.updateImages(data.images);
//         })
//         .catch(error => this.setState({error, isLoading: false}));
// }
//
//
// render() {
//     return (
//         <div>
//             <form encType="multipart/form-data" action="">
//                 <input id="id-for-upload-file" onChange={this.addFile.bind(this)} type="file"/>
//             </form>
//         </div>)
// }