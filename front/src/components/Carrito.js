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
                    <h1 id="encabezado_productos">Productos Seleccionados</h1>

            <section id="productos" className='col-12'>
            <div clasName="navbar row text-center">
                    <a className="col-12 col-md-1">Imagen</a>
                    <a className="col-12 col-md-4">Producto</a>
                    <a className="col-12 col-md-1">Cantidad</a>     
                    <a className="col-12 col-md-2">Vr. Unit</a>    
                    <a className="col-12 col-md-2">Vr. Total</a>
                    <a className="col-12 col-md-1">Acción</a>
            </div>
                {productos && productos.map (producto => (
                        <div key={producto._id} className='col-12'>
                            <table className="table col-12">

                                <tbody>
                                    <tr>
                                    <td> <img className='card-img-min rounded mx-auto d-block' src={producto.imagen[0].url} alt={producto.imagen[0].public_id} ></img></td>
                                    <td><p className="col-12 col-md-2-5">{producto.nombre}</p></td>
                                    <td><p className="col-12 col-md-6 text-center">1</p></td>
                                    <td><p className="col-12 col-md-7-8 text-right">$ {producto.precio}</p></td>
                                    <td><p className="col-12 col-md-9-10 text-right">$ {producto.precio}</p></td>
                                    <td><Link to={`/producto/${producto._id}`} id="danger"clasName="col-12 col-md-11 text-center">Eliminar</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                                                </div>

                    ))}
                    
            </section>
            <div>
                <h2 className="col-12 col-md-8 text-right">Total</h2>


            </div>
                </Fragment>

            )}
            

        </Fragment>
    )
}
export default Carrito