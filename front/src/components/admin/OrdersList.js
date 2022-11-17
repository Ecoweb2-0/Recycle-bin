import React, { Fragment, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { clearErrors, deleteOrder, allOrders } from '../../actions/orderActions'


export const OrdersList = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, orders, error} = useSelector(state=> state.orders)
   
    
    const deleteOrderHandler= (id)=> {
        const response=window.confirm("Esta seguro de querer borrar esta orden?")
        if (response){
            dispatch(deleteOrder(id))
            alert.success("Orden eliminada correctamente")
            window.location.reload(false)
        }
    }
    useEffect(() => {
        dispatch(allOrders());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error])

    const setOrders = () => {
        const data = {
            columns: [
                {
                    label: 'Fecha Orden',
                    field: 'fechaCreacion',
                    sort: 'asc'
                },
                {
                    label: 'Valor Compra',
                    field: 'precioTotal',
                    sort: 'asc'
                },
                {
                    label: 'Estado',
                    field: 'estado',
                    sort: 'asc'
                },
                {
                    label: 'Productos',
                    field: 'Items',
                    sort: 'asc'
                },
                {
                    label: 'Acciones',
                    field: 'actions',
                },
            ],
            rows: []
        }

        orders.forEach(order => {
            data.rows.push({
                fechaCreacion: order.fechaCreacion,
                precioTotal: `$ ${order.precioTotal}`,
                estado: order.estado,
                Items: order.Items,
                actions:    <Fragment>
                                <Link to={`/orden/${order._id}`} className="btn btn-primary py-1 px-2 mr-2">
                                    <i className="fa fa-eye"></i>
                                </Link>
                                <Link to={`/editar/orden/${order._id}`} className="btn btn-warning py-1 px-2 mr-2">
                                    <i className="fa fa-pencil"></i>
                                </Link>
                                <Link to="/" className="btn btn-danger py-1 px-2">
                                    <i className="fa fa-trash"></i>
                                </Link>
                            </Fragment>
            })
        })

        return data;
    }

    return (
        <Fragment>
            <MetaData title={'Lista de ordenes'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">Ordenes Registradas</h1>

                        {loading ? <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                            <MDBDataTable
                                data={setOrders()}
                                className="px-3 text-center"
                                bordered
                                striped
                                hover
                                noBottomColumns={true} 
                            />
                        )}

                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}
export default OrdersList