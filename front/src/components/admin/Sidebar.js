import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/Dashboard"><i className="fa fa-tachometer"></i> Administración</Link>
                    </li>

                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa fa-product-hunt"></i> Productos</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/productList"><i className="fa fa-clipboard"></i>Listado</Link>
                            </li>

                            <li>
                                <Link to="/nuevoProducto"><i className="fa fa-plus"></i> Crear</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/myOrders"><i className="fa fa-shopping-basket"></i> Pedidos</Link>
                    </li>

                    <li>
                        <Link to="/allUsers"><i className="fa fa-users"></i> Usuarios</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar