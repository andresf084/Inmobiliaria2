const findAdviser = (req, res, next) => {
    /*
    const newUser = {
        name: req.body.name,
        identification: req.body.identification,
        email: req.body.email,
        user: req.body.user,
    }
    */
    try{
      console.log(req.body)
      req.body.identification? res.status(409).send('identificación ya existe') : console.log('identificación no existe')
      next()
    }catch(err){
      res.status(500).send({"msg":"ocurrió un error: "+err})
    }
}

  module.exports = {findAdviser}