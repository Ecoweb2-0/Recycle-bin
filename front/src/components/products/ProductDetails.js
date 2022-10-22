import React, { Fragment } from 'react'
import MetaData from "../layout/MetaData"

export const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title="Cobre tonelada"></MetaData>
           <div class="card-footer p-8">
              <div className='row d-flex left-content-around'>
                    <img className="card-img-justify" src="../images/Cobre_tonelada.jpg" alt="Imagen_producto" height="300" width="300" />
                     
              <div className='position:left '>
                    <img className="card-img-left" src="../images/Formas.png" alt="Imagen_producto" height="300" width="300" />
                  </div>        
                 </div>     
                      
                      <div class="card-body p-8">
                  <div class="text-justify">
                      </div>
                            <h5 class="fw-bolder">COBRE POR TONELADA</h5>
                                  
                            <div class="d-flex justify-content-justify small text-warning mb-2">
                            </div> 
                                <p id="product_id">CADA CONTENEDOR DE CONTIENE 1.000 KILOS DE COBRE 100% RECICLADO</p>                                 
                                  <div>ANTES:$ ̶2̶0̶.̶0̶0̶0̶.̶0̶0̶0̶</div>
                                  <div>AHORA:$ 17.000.000</div>
                            </div>
                    </div>
                            
                      <div class="card-footer p-0 pt-0 border-top-0 bg-transparent">
                          <div class="padding: 10% 0"><a class="btn btn-outline-dark mt-auto" href="#">Adicicionar a carrito</a></div>
                      </div>
              
               
                    
    </Fragment>
  )
}




