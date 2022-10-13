const producto=require("../models/productos")

//Ver la lista de productos
exports.getProducts=async (req,res,next) =>{
    const productos=await producto.find();
    res.status(200).json({
        success:true,
        count: productos.length,
        productos
    })
}


//Consultar un producto por id
exports.getProductById= async (req,res,next)=>{
    const product=await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success:false,
            message: "No encontramos ese producto"
        })

    }
    res.status(200).json({
        success:true,
        message: "Aqui debajo encunetras información sobre tu producto: ",
        product
    })
}

// Update un producto
exports.updateProduct= async (req,res,next) =>{
    let product=await producto.findById(req.params.id)
    if (!product){ //Si el producto noe stá finaliza el proceso
            return res.status(404).json({
                success:false,
                message: "No encontramos ese producto"
            })
    }
// Si el productó está lo actualiza
    product= await producto.findByIdAndUpdate(req.params.id, req.body,{
        new:true, // valida sólo lo nuevo
        runValidators:true
    });
    //Confirma que si actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        producto
    })
}

//Eliminar producto
exports.deleteProduct= async (req,res,next) =>{
    const product=await producto.findById(req.params.id)
    if (!product){ //Si el producto no está finaliza el proceso
            return res.status(404).json({
                success:false,
                message: "No encontramos ese producto"
            })
        }
        await product.remove();
        res.status(200).json({
            success:true,
            message: "El producto fue eliminado"
        })
}

//Crear nuevo producto /api/producto/nuevo
exports.newProduct=async(req,res,next)=>{
    const product=await producto.create(req.body);
    
    res.status(201).json({
        success:true,
        product
    })
}
