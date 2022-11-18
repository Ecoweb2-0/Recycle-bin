import React, { Fragment, useEffect } from 'react'
import MetaData from "../layout/MetaData"
import { MDBDataTable } from "mdbreact"
import { useAlert } from "react-alert"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { clearErrors, getAllUsers, deleteUser } from '../../actions/userActions'

export const ListUser = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, users } = useSelector(state => state.users);

    const deleteUsertHandler= (id)=> {
        const response=window.confirm("Esta seguro de querer borrar este usuario?")
        if (response){
            dispatch(deleteUser(id))
            alert.success("Usuario eliminado correctamente")
            window.location.reload(false)
        }
    }

    useEffect(() => {
        dispatch(getAllUsers())

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error])

    const setUsers = () => {
        const data = {
            columns: [
                {
                    label: "Nombre",
                    field: "nombre",
                    sort: "asc"
                },
                {
                    label: "Email",
                    field: "email",
                    sort: "asc"
                },
                {
                    label: "Rol",
                    field: "role",
                    sort: "asc"
                },
                {
                    label: "Acciones",
                    field: "acciones",
                    sort: "asc"
                },
            ],
            rows: []
        }


        users.forEach(user => {
                data.rows.push({
                nombre: user.nombre,
                email: user.email,
                role: user.role,
                acciones: <Fragment>
                    <Link to={`api/admin/user/${user._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-eye"></i>
                    </Link><Link to={`/updateUser/${user._id}`} className="btn btn-warning py-1 px-2">
                    <i className="fa fa-pencil"></i>
                    </Link>

                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteUsertHandler(user._id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
                    
                        
            })
        })
        return data;
    }

    return (
        <Fragment>

            <MetaData title={'Usuarios'} />

            <h1 className="my-5">Lista de Usuarios</h1>

            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                <MDBDataTable
                    data={setUsers()}
                    className="px-3"
                    bordered
                    striped
                    hover
                    noBottomColumns={true}

                />
            )}

        </Fragment>
    )
}