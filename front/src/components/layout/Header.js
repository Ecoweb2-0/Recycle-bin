import React, {Fragment} from 'react'
import "../../App.css"

const Header = () => {

    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
                        <img src="./images/logo.png" alt="Ecoweb Logo" height={80}></img>
                    </div>
                </div>

                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                    <div className="input-group">
                        <input
                            type="text"
                            id="search_field"
                            className="form-control"
                            placeholder='¿Qué estás buscando?'></input>
                        <div className="input-group-append">
                            <button id="search-btn" className="btn">
                                <i className="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <span><button className='btn' id="login_btn">Inicie Sesión</button></span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <a className="fa fa-shopping-cart fa-2x text-white" id="cars" href="/Carrito" aria-hidden="false"></a>
                    <span className="ml-1" id="cart_count">2</span>
                </div>
            </nav>
            <tr className="navbar row text-center navig">
                <a className="link_user col-12 col-md-2" href="/Home" >Inicio</a>
                <a className="link_user col-12 col-md-2" href="/ventas" >Ventas</a>
                <a className="link_user col-12 col-md-2" href="/Admin-product" >Productos</a>
                <a className="link_user col-12 col-md-2" href="/producto/nuevo" >Nuevos Productos</a>
                <a className="link_user col-12 col-md-2" href="/Home" >Usuarios</a>
                <a className="link_user col-12 col-md-2" href="/Carrito" >Carrito</a>
                
            
            </tr>
            
        
        </Fragment>
    )
}

export default Header