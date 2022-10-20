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
        default: 0.0
        
    },
    descripcion:{
        type:String,
        requiered:[true, "Por favor registre una descripción para el producto."]
    },
    calificacion:{
        type:Number,
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                requerid:true
            },
            url:{
                type:String,
                requerid:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true, "Por favor seleccione la categoria del producto."],
        enum:{
           values:[
            "Carton",
            "Papel",
            "Metal",
            "Vidrio",
            "Plastico"
           ] 
        }
    },
    vendedor:{
        type:String,
        required:[true, "Por favor registre el vendedor del producto"]
    },
    inventario:{
        type:Number,
        required:[true, "Por favor registre el stock del producto"],
        maxLength:[5, "La cantidad maxima del producto no puede sobrepasar 99999"],
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                requiered:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentarios:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }

})


module.exports=mongoose.model("productos",productosSchema)