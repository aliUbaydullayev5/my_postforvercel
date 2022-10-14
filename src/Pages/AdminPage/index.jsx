import React, {useEffect, useState} from 'react';
import {Block} from "./style";
import Login from "../../Components/AdminComponents/Login";
import AdminPanel from "../../Components/AdminComponents/AdminPanel";

const AdminPage = () => {

    const [admin, setAdmin] = useState(null);


    useEffect(()=> {
        if (localStorage.getItem("token")) setAdmin(true)
        else setAdmin(false)
    }, [])

    return(
        <Block>
            {admin ?
                <div>
                    <AdminPanel changeAdmin={setAdmin} />
                </div>
                :
                <div>
                    <Login changeAdmin={setAdmin} />
                </div>
            }
        </Block>
    )
}

export default AdminPage;