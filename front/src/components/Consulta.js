import React, { Component } from 'react'

import MetaData from './layout/MetaData'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert} from 'react-alert'
import { Link } from 'react-router-dom'

import MaterialTable from 'material table';

function Consulta() {

    const newLocal = "numeric"
    const columnas = [
        {
            title: 'Fecha',
            field: 'fecha'
        },
        {
            title: 'Identificador',
            field: 'identificador'
        },
        {
            title: 'Producto',
            field: 'producto'
        },
        {
            title: 'Cant. Kg',
            field: 'cant'
        },
        {
            title: 'Precio Unitario',
            field: 'precio'
        },
        {
            title: 'Total Venta',
            field: 'total',
            type: "numeric"
        },
    ];

const data =    [
    {fecha: '01/10/2022', identificador: '12345', producto: 'Cobre', cant: '100 Kg', precio: '$1.000', total: 100000},
    {fecha: '02/10/2022', identificador: '12346', producto: 'Hierro', cant: '90 Kg', precio: '$1.000', total: 90000},
    {fecha: '03/10/2022', identificador: '12347', producto: 'Vidrio', cant: '100 Kg', precio: '$1.000', total: 100000},
    {fecha: '04/10/2022', identificador: '12348', producto: 'Plástico', cant: '370 Kg', precio: '$1.000', total: 370000},
    {fecha: '05/10/2022', identificador: '12349', producto: 'Cartón', cant: '100 Kg', precio: '$1.000', total: 100000}
]



return (
    <div>
<MaterialTable>
    columns={columnas}
    data={data}
</MaterialTable>
    </div>
)

}

export default Consulta;