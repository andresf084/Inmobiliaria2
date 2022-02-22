const construirBusqueda = (req,res,next)=>{
    try{
        //console.log(req.query)
        req.body.zone? req.body.zone = req.body.zone.split(","): console.log("no se va a buscar por zona")
        //req.body.canon? req.body.canon = JSON.parse(req.body.canon) : console.log("no llegó canon, no haré conversión") //si viene el string desde el front ""
        req.body.price? req.body.price = {'$lte':req.body.price} : console.log("no llegó precio")
        req.body.area? req.body.area = {'$lte':req.body.area} : console.log("no llegó dato de área")
        req.body.rooms? req.body.rooms = {'$lte':req.body.rooms} : console.log("no llegó dato de habitaciones")
        req.body.bathrooms? req.body.bathrooms = {'$lte':req.body.bathrooms} : console.log("no llegó dato de baños")
        req.body.businessType? req.body.businessType = req.body.businessType: console.log("no se va a buscar por tipo de negocio")
        req.body.propertyType? req.body.propertyType = req.body.propertyType: console.log("no se va a buscar por tipo de propiedad")
        req.body.city? req.body.city = req.body.city: console.log("no se va a buscar por ciudad")
        next()
    }catch(err){
        res.status(500).send({"msg":"ocurrió un error: "+err})
    }
}

module.exports = {
    construirBusqueda
}