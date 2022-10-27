import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert} from 'react-alert'
import { Link } from 'react-router-dom'
import {numberWithCommas} from '../numberWithCommas'

export const AdminProduct = () => {
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
                <div className="col-9 text-center">
                    <MetaData title="Administrar Productos"></MetaData>
                <br></br>
                <h3> Administrar productos</h3>
               <table className="table">
                <thead className="table-az">
                    <tr>
                        <th className='col-1 text-center'></th>
                        <th className='col-1 text-center'></th>
                        <th className='col-3 text-left'>Producto</th>
                        <th className='col-1 text-center'>Cantidad</th>
                        <th className='col-2 text-right'>Precio x uni</th>
                        <th className='col-2 text-right'>Acciones</th>

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
                        <td className="col-3 text-left">{producto.nombre}</td>
                        <td className="col-1 text-center">1</td>
                        <td className="col-2 text-right">$ {numberWithCommas(producto.precio)}</td>
                  
                        <td width="20px" height="20px"><Link to={`/producto/${producto._id}`}><img src='./images/Editar.png' className='editimg' alt="Editar"></img></Link></td>
                        <td><Link to={`/producto/${producto._id}`}><img src='./images/Eliminar.png' className='editimg' alt="Eliminar"></img></Link></td>
                    </tr>
                ))}
                </tbody>
            </table> 
            </div>
                </Fragment>

            )}
            
            

        </Fragment>
    )
}
export default AdminProduct