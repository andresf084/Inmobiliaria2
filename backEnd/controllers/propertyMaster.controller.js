const ctrlPropertyMaster = {},
PropertyMaster = require('../models/propertyMaster.model')

ctrlPropertyMaster.create = async (req, res) => {
    const newProperty = new PropertyMaster({
        title: req.body.title,
        businessType: req.body.businessType,
        propertyType: req.body.propertyType,
        city: req.body.city,
        zone: req.body.zone,
        address: req.body.address,
        description: req.body.description,
        price: req.body.price,
        propertyImages: req.body.propertyImages,
        rooms: req.body.rooms,
        bathrooms: req.body.bathrooms,
        area: req.body.area,
        adviser: req.body.adviser
    });
    await newProperty.save();
    res.json({msg: "property created successfully", status: true})
}

ctrlPropertyMaster.list = async (req, res) => {
    const propertys = await PropertyMaster.find({}).sort({"address": 1}).exec();
    res.json(propertys);
}

ctrlPropertyMaster.update = async (req, res) => {
    const {
        _id,
        businessType,
        propertyType,
        city,
        zone,
        address,
        description,
        price,
        propertyImages,
        rooms,
        bathrooms,
        area,
        adviser,
        status
        } = req.body;
    const filter = {_id: _id}
    const update = {
        businessType: businessType,
        propertyType: propertyType,
        city: city,
        zone: zone,
        address: address,
        description: description,
        price: price,
        propertyImages: propertyImages,
        rooms: rooms,
        bathrooms: bathrooms,
        area: area,
        adviser: adviser,
        status: status}
    await PropertyMaster.findOneAndUpdate(filter, update);
    res.json({ status: true });
};

ctrlPropertyMaster.delete = async (req, res) => {
    const { _id } = req.params;
    await PropertyMaster.deleteOne({ _id: _id });
    res.json({ status: true });
};


ctrlPropertyMaster.search = async (req, res ) => {
    console.log("pasó el middleware(next) y por eso me estoy ejecuntando")
    console.log(req.body)
    PropertyMaster.find(req.body,(err, apartamentos)=>{
        if(err) res.send(err)
        res.send(apartamentos)
    })
    //res.send(req.query)
};


/**
ctrlPropertyMaster.search = async (req, res ) => {
    console.log(req.body);
    const apartamentos = await PropertyMaster.find({
        businessType: req.body.businessType,
        propertyType: req.body.propertyType,
        city: req.body.city,
        zone: req.body.zone,
        price: {'$lte':req.query.price},
        rooms: {'$lte':req.query.rooms},
        bathrooms: {'$lte':req.query.bathrooms},
        area: {'$lte':req.query.area},
        adviser: req.body.adviser
        })
    res.json(apartamentos)
};
 */


module.exports = ctrlPropertyMaster