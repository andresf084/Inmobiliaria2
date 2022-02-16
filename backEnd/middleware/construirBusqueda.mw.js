const construirBusqueda = (req,res,next)=>{
    try{
        //console.log(req.query)
        req.query.zone? req.query.zone = req.query.zone.split(","): console.log("no se va a buscar por ubicación")
        //req.query.canon? req.query.canon = JSON.parse(req.query.canon) : console.log("no llegó canon, no haré conversión") //si viene el string desde el front ""
        req.query.price? req.query.price = {'$lte':req.query.price} : console.log("no llegó canon, no haré conversión")
        next()
    }catch(err){
        res.status(500).send({"msg":"ocurrió un error: "+err})
    }
}

module.exports = {
    construirBusqueda
}