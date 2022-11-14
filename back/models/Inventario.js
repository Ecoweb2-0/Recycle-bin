const mongoose=require("mongoose")

const inventarioSchema=mongoose.Schema({
    nombre: {
        type:String,
        required: true
    },
    precio: {
        type:Number,
        required: true
    },
    descripcion: {
        type:String,
        required: true
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
    categoria: {
        type:String,
        required: true
    },
    fechaCreacion: {
        type:Date,
        required: true
    },


});

module.exports=mongoose.model("inventario",inventarioSchema)