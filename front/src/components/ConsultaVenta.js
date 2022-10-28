import React, { Component } from 'react'

import MetaData from './layout/MetaData'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert} from 'react-alert'
import { Link } from 'react-router-dom'



import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  fecha: (string),
  producto: string,
  cantidad: number,
  precioUnidad: number,
  precioTotal: number,
) {
  return { fecha, producto, cantidad, precioUnidad, precioTotal };
}

const rows = [
  createData('01/10/2022', 'Cobre', 6, 1000, 6000),
  createData('02/10/2022', 'Hierro', 9, 1000, 9000),
  createData('03/10/2022', 'Vidrio', 1, 1000, 1000),
  createData('04/10/2022', 'Plástico', 3.7, 1000, 3700),
  createData('05/10/2022', 'Cartón', 16, 1000, 16000),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Fecha</StyledTableCell>
            <StyledTableCell align="center">Producto</StyledTableCell>
            <StyledTableCell align="center">Cant. x Ton.</StyledTableCell>
            <StyledTableCell align="center">Precio Unidad</StyledTableCell>
            <StyledTableCell align="center">Precio Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.fecha}>
              <StyledTableCell component="th" scope="row">
                {row.fecha}
              </StyledTableCell>
              <StyledTableCell align="center">{row.producto}</StyledTableCell>
              <StyledTableCell align="center">{row.cantidad}</StyledTableCell>
              <StyledTableCell align="center">{row.precioUnidad}</StyledTableCell>
              <StyledTableCell align="center">{row.precioTotal}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
//&nbsp;  espacio