import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'
import { useAlert} from 'react-alert'

export const Carrito = () => {
    const { loading, productos, error} = useSelector(state=> state.products)
    const alert= useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error){
            return alert.error(error)
        }

        dispatch(getProducts());
        alert.success("OK")
    }, [dispatch])


    return (
        <Fragment>
            {loading ? <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                <Fragment>
                    <MetaData title="Excelente eleccion"></MetaData>
                    <h3>Productos Seleccionados</h3>

            <section id="productos">

            <table className="table col-11">
                <thead className="table-dark">
                    <tr>
                        <th className='col-1 text-center'></th>
                        <th className='col-1 text-center'></th>
                        <th className='col-3'>Producto</th>
                        <th className='col-1 text-center'>Cantidad</th>
                        <th className='col-2 text-center'>Vr. Unit</th>
                        <th className='col-2 text-center'>Vr. Total</th>
                        <th className='col-1 text-center'></th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                {productos && productos.map(producto => (
                    <tr>
                        <td className='col-1 text-center'>
                            <input type="checkbox" name="" id="seleccion" />
                        </td>
                        <td className='col-1'> <img className='card-img-min rounded mx-auto d-block' src={producto.imagen[0].url} alt={producto.imagen[0].public_id} ></img></td>
                        <td className="col-3">{producto.nombre}</td>
                        <td className="col-1 text-center">1</td>
                        <td className="col-2 text-right">$ {producto.precio}</td>
                        <td className="col-2 text-right">$ {producto.precio}</td>
                        <td><Link to={`/producto/${producto._id}`} id="delete_cart_item"clasName="col-1 text-center">X</Link></td>
                    </tr>
                ))}
                </tbody>
            </table> 
            </section>
            <div> <h3 className="col-9 text-right">Total</h3></div> 
            <div className='col-11 text-center'><button  className='btn btn-danger text-center'>Ir a pagar</button></div>
                </Fragment>

            )}
            

        </Fragment>
    )
}
export default Carrito