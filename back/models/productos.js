const mongoose=require("mongoose")

const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Por favor registra el nombre del producto."],
        trim:true,
        maxLength:[120, "El nombre del producto no debe exceder los 120 caracteres"]
    },
    precio:{
        type: Number,
        required:[true, "POr favor registre el precio del producto."],
        maxLength:[8,"El precio del producto no puede estar por encima de 99'999.999"],
        
    }

})