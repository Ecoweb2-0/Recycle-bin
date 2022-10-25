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
                            class="form-control"
                            placeholder='¿Qué estás buscando?'></input>
                        <div class="input-group-append">
                            <button id="search-btn" class="btn">
                                <i class="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <span><button className='btn' id="login_btn">Inicie Sesión</button></span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <a class="fa fa-shopping-cart fa-2x text-white" id="cars" href="/Carrito" aria-hidden="false"></a>
                    <span className="ml-1" id="cart_count">2</span>
                </div>
            </nav>
            <tr class="navbar row text-center navig">
                <a class="link_user col-12 col-md-2" href="#" >Inicio</a>
                <a class="link_user col-12 col-md-2" href="#" >Métales</a>
                <a class="link_user col-12 col-md-2" href="#" >Plásticos</a>
                <a class="link_user col-12 col-md-2" href="#" >Cartón</a>
                <a class="link_user col-12 col-md-2" href="#" >Papel</a>
                <a class="link_user col-12 col-md-2" href="#" >Vidrio</a>
                
            
            </tr>
            
        
        </Fragment>
    )
}

export default Header