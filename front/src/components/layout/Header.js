import React, { Fragment } from 'react'
import "../../App.css"
import { Link } from "react-router-dom"
<<<<<<< HEAD
=======
import { Search } from './Search'
>>>>>>> fc3bfc1eb8577ee6b78bc0e492051900a383a44a
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout} from "../../actions/userActions"

const Header = () => {
    const {cartItems} = useSelector(state=>state.cart)
    
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
<<<<<<< HEAD
                    <Link to="/"><img src="../images/logo.png" alt="Ecoweb Logo" height={80}></img></Link>
                    </div>
                </div>

                {/*Boton inicio sesión*/}
                <div className="col-12 col-md-4 mt-4 mt-md-0 text-center">
                    <Link to="/carrito"><i className="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
=======
                    <Link to="/"><img src="./images/logo.png" alt="Ecoweb Logo" height={80}></img></Link>
                    </div>
                </div>

                <div className='col-12 col-md-5 mt-2 mt-md-0'>
                    {/*Aqui va buscar*/}
                    <Search />
                </div>
                {/*Boton inicio sesión*/}
                <div className="col-12 col-md-4 mt-4 mt-md-0 text-center">
                    <Link to="/carrito"><i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
>>>>>>> fc3bfc1eb8577ee6b78bc0e492051900a383a44a
                        <span className="ml-1" id="cart_count">{cartItems.length}</span></Link>

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

                                <Link className="dropdown-item" to="/">Pedidos</Link>
                                <Link className="dropdown-item" to="/yo">Mi Perfil</Link>
                                <Link className="dropdown-item" to="/" onClick={logoutHandler}>Cerrar Sesion</Link>
                            </div>
                        </div>
                    ) : !loading && <Link to="/login" className='btn ml-4' id="login_btn">Login</Link>}


                </div>

            </nav>
<<<<<<< HEAD
            <div className="navbar row text-center navig">
                    </div>
           

=======
            <tr className="navbar row text-center navig">
            ORGANIZACIÓN ESPECIALIZADA EN LA VENTA DE MATERIAL RECICLADO AL POR MAYOR             
            
              </tr>
>>>>>>> fc3bfc1eb8577ee6b78bc0e492051900a383a44a
        </Fragment>
    )

}

export default Header