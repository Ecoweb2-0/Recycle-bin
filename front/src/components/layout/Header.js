import React, {Fragment} from 'react'
import "../../App.css"
import { Link } from 'react-router-dom'
import { Search } from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout} from "../../actions/userActions"

const Header = () => {
    const alert= useAlert();
    const dispatch= useDispatch();

    const { user, loading } = useSelector(state => state.auth)

    const logoutHandler = () =>{
        dispatch(logout());
        alert.success("LogOut exitoso")
    }
    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
                        <img src="./images/logo.png" alt="Ecoweb Logo" height={80}></img>
                    </div>
                </div>

                <div className='col-12 col-md-4 mt-2 mt-md-0'>
                 {/*Aqui va buscar*/}
                 <Search />
                </div>
                {/*Boton inicio sesión*/}
 {/*Boton inicio sesión*/}
                <div className="col-12 col-md-4 mt-4 mt-md-0 text-center">
                    <Link to="/carrito"><i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                        <span className="ml-1" id="cart_count">2</span></Link>

                    {user ? (
                        <div className="ml-4 dropdown d-inline">
                            <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                                id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <figure className='avatar avatar-nav'>
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.nombre}
                                        className="rounded-circle"></img>
                                </figure>
                                <span>{user && user.nombre}</span>
                            </Link>
                            <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                                {/*Preguntamos el rol de quien esta online*/}
                                {user && user.role === "admin" && (
                                    <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                                )}

                                <Link className="dropdown-item" to="/ordersList">Pedidos</Link>
                                <Link className="dropdown-item" to="/yo">Mi Perfil</Link>
                                <Link className="dropdown-item" to="/" onClick={logoutHandler}>Cerrar Sesion</Link>
                            </div>
                        </div>
                    ) : !loading && <Link to="/login" className='btn ml-4' id="login_btn">Login</Link>}


                </div>

            </nav>
            <tr className="navbar row text-center navig">
                <a className="link_user col-12 col-md-2" href="/Home" >Inicio</a>
                <a className="link_user col-12 col-md-2" href="/Home" >Promociones</a>
                <a className="link_user col-12 col-md-2" href="/Home" >Nuevos Producto</a>
                <a className="link_user col-12 col-md-2" href="/Home" >Proveedores</a>
                <a className="link_user col-12 col-md-2" href="/Home" >Contactenos</a>
                <a className="link_user col-12 col-md-2" href="/carrito" >Carrito</a>
                
            
            </tr>
            
        
        </Fragment>
    )
}

export default Header