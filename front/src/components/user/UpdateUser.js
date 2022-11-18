import React, { Fragment, useEffect, useState } from 'react'
import MetaData from "../layout/MetaData"
import { useNavigate, useParams } from "react-router-dom"
import { useAlert } from "react-alert"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails, clearErrors, updateUser } from '../../actions/userActions'
import { USER_UPDATE_RESET} from '../../constants/userConstants'


export const UpdateUser = () => {
    const navigate = useNavigate();
    const params= useParams();
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    
    const roles = [
        "admin",
        "user",
          ]
    
        const alert = useAlert();
        const dispatch = useDispatch();
      
        const { loading, isUpdated, error: updateError} = useSelector (state => state.user)
        const { error, user} = useSelector ( state => state.userDetails)
        const userId= params.id;

    useEffect(() => {
        if (user && user.id !==userId){
            dispatch(getUserDetails(userId));
        }else{
            setNombre(user.nombre);
            setEmail(user.email);
            setRole(user.role)
        }

        if(error){
            alert.error(error)
            dispatch(clearErrors)
        }
        if (updateError){
            alert.error(error)
            dispatch(clearErrors)
        }
        if(isUpdated){
            alert.success("Usuario actualizado correctamente")
            navigate("/dashboard")
            dispatch({ type: USER_UPDATE_RESET})
        }
          
    }, [dispatch, alert, error, isUpdated, updateError, user, userId])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set("nombre", nombre);
        formData.set("email", email);
        formData.set("role", role)

        dispatch(updateUser(formData))
    }

    return (
        <Fragment>
            <MetaData title={'ACTUALIZAR USUARIO'} />

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                        <h1 className="mt-2 mb-5">Actualizar Usuario</h1>

                        <div className="form-group">
                            <label htmlFor="email_field">Nombre</label>
                            <input
                                type="name"
                                id="name_field"
                                className="form-control"
                                name='nombre'
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="role_field">Rol</label>
                            <select className="form-control" 
                            id="role_field" 
                            value={role} 
                            onChange={(e) => setRole(e.target.value)}>
                                {roles.map(role => (
                                    <option key={role} value={role} >{role}</option>
                                ))}

                            </select>
                            </div>

                        <button type="submit" className="btn update-btn btn-block mt-4 mb-3"
                            disabled={loading ? true : false} >Actualizar Usuario</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}