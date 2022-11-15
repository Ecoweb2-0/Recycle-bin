import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useParams, Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import Pagination from 'react-js-pagination'
import Slider from "rc-slider"
import 'rc-slider/assets/index.css'
import CurrencyFormat from 'react-currency-format'

export const Home = () => {
    const params = useParams();
    const keyword = params.keyword;
    const [precio, setPrecio] = useState([100, 1000000])
    const [currentPage, setCurrentPage] = useState(1)
    const { loading, products, error, resPerPage, productsCount } = useSelector(state => state.products)
    const alert = useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getProducts(currentPage, keyword, precio));
    }, [dispatch, alert, error, currentPage, keyword, precio])

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                <Fragment>
                    <MetaData title="Los mejores productos reciclados"></MetaData>
                    <h1 id="encabezado_productos" className='text-center font-family: "Aldhabi", "Aldhabi" ' >ORGANIZACIÓN ESPECIALIZADA EN LA VENTA DE MATERIAL RECICLADO AL POR MAYOR</h1>

                    <section id="productos" className='container mt-5'>
                        <div className='row'>
                              {products && products.map(producto => (
                                <div key={producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                    <div className='card p-3 rounded'>
                                        <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img>
                                        <div className='card-body d-flex flex-column'>
                                            <h5 id="titulo_producto"><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
                                            <div className='rating mt-auto'>
                                                <div className='rating-outer'>
                                                    <div className='rating-inner' style={{ width: `${(producto.calificacion / 5) * 100}%` }}></div>
                                                </div>
                                                <span id="No_de_opiniones"> {producto.numCalificaciones} Reviews</span>
                                            </div>
                                            <p className='card-text'><CurrencyFormat value={producto.precio}displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
                                            </p><Link to={`/producto/${producto._id}`} id="view_btn" className='btn btn-block'>
                                                Ver detalle
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </section>

                    <div className='d-flex justify-content-center mt-5'>
                        <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resPerPage}
                        totalItemsCount={productsCount}
                        onChange={setCurrentPageNo}
                        count={10} shape="rounded" variant="outlined" 
                        itemClass='page-item'
                        linkClass='page-link'
                        />
                    </div>

                </Fragment>

            )}


        </Fragment>
    )
}
export default Home