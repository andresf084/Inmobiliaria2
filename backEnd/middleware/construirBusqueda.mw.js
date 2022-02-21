const construirBusqueda = (req,res,next)=>{
    try{
        //console.log(req.query)
        req.query.zone? req.query.zone = req.query.zone.split(","): console.log("no se va a buscar por ubicación")
        //req.query.canon? req.query.canon = JSON.parse(req.query.canon) : console.log("no llegó canon, no haré conversión") //si viene el string desde el front ""
        req.query.price? req.query.price = {'$lte':req.query.price} : console.log("no llegó canon, no haré conversión")
        req.query.area? req.query.area = {'$lte':req.query.area} : console.log("no llegó dato de área")
        req.query.rooms? req.query.rooms = {'$lte':req.query.rooms} : console.log("no llegó dato de área")
        req.query.bathrooms? req.query.bathrooms = {'$lte':req.query.bathrooms} : console.log("no llegó dato de área")
        req.query.businessType? req.query.businessType = req.query.businessType.split(","): console.log("no se va a buscar por tipo de negocio")
        req.query.propertyType? req.query.propertyType = req.query.propertyType.split(","): console.log("no se va a buscar por tipo de propiedad")
        req.query.city? req.query.city = req.query.city.split(","): console.log("no se va a buscar por ciudad")
        req.query.zone? req.query.zone = req.query.zone.split(","): console.log("no se va a buscar por zona")
        next()
    }catch(err){
        res.status(500).send({"msg":"ocurrió un error: "+err})
    }
}

module.exports = {
    construirBusqueda
}