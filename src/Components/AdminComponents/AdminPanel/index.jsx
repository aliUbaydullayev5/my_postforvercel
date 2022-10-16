import React, {useState} from 'react'
import {Block} from "./style";
import axios from "axios";

const AdminPanel = ({changeAdmin}) => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)

    const pushPost = () => {
        if (title.length && desc.length) {
            const formData = new FormData()

            formData.append('img', file)
            formData.append('title', title)
            formData.append('desc', desc)

            axios({
                url: 'https://preoject2.herokuapp.com/api/addPost',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },

                data: formData
            }).then((res) => {
                alert(res.data.message)
                setTitle('')
                setDesc('')
            })
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

            <input type={'file'} name={'img'} placeholder={'Img URL'} onChange={(e)=> setFile(e.target.files[0])} />
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