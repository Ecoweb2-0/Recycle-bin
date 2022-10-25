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

            <table className="table col-12">
                <thead>
                    <tr>
                        <th></th>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Vr. Unit</th>
                        <th>Vr. Total</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                {productos && productos.map(producto => (
                    <tr>
                        <td>
                            <input type="checkbox" name="" id="" />
                        </td>
                        <td> <img className='card-img-min rounded mx-auto d-block' src={producto.imagen[0].url} alt={producto.imagen[0].public_id} ></img></td>
                        <td className="col-12 col-md-2-5">{producto.nombre}</td>
                        <td className="col-12 col-md-6 text-center">1</td>
                        <td className="col-12 col-md-7-8 text-right">$ {producto.precio}</td>
                        <td className="col-12 col-md-9-10 text-right">$ {producto.precio}</td>
                        <td><Link to={`/producto/${producto._id}`} id="danger"clasName="col-12 col-md-11 text-center">Eliminar</Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
                    
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