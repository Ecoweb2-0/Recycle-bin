const mongoose =require("mongoose")

const productosSchema= mongoose.Schema({
    nombre: {
        type:String,
        required:[true,"Por favor registra el nombre del producto."],
        trim:true,
        maxLength:[120,"El nombre del producto no debe exceder 120 caracteres"]
    },
    precio:{
        type: Number,
        required:[true,"Por favor registra el precio del producto."],
        maxLength:[10,"El precio del producto no puede estar por enciama de 999.999.999"],
        default:0.0
    },
    descripcion: {
        type:String,
        required:[true,"Por favor registra una descripcón del producto."]
      
    },
    calificacion:{
        type:Number,
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }

        }
    ],
    categoria:{
        type:String,
        required:[true,"Por favor seleccione la categoria del producto."],
        enum:{
            values:[
                "Metales",
                "Plastico",
                "Carton",
                "Papel",
                "Vidrio",
            ]
        }

    },
    vendedor:{
        type:String,
        required:[true,"Por favor registre el nombre del vendedor del producto."]
    },
    inventario:{
        type:true,
        required:[true,"Por favor registre el stock del producto"],
        maxLength:[5,"Cantidad maxima en el producto no puede sobrepasar 9.999"],
        default:0

    },
    numCalificaciones: {
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required: true,

            },
            rating:{
                type:Number,
                require:true
            },
            comentario:{
                type:String,
                required:true
            }
    
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    },
})

module.exports= mongoose.model("productos",productosSchema)

