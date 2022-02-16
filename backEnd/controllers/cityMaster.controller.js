const ctrlCityMaster = {},
CityMaster = require('../models/cityMaster.model')

ctrlCityMaster.create = async (req, res) => {
    const newCity = new CityMaster({
        region: req.body.region,
        c_digo_dane_del_departamento: req.body.c_digo_dane_del_departamento,
        departamento: req.body.departamento,
        c_digo_dane_del_municipio: req.body.c_digo_dane_del_municipio,
        municipio: req.body.municipio
    });
    await newCity.save();
    res.json({msg: "City created successfully", status: true})
}

/*
ctrlCityMaster.create = async (req, res) => {
    const newCity = CityMaster.insertMany ({
        region: req.body.region,
        c_digo_dane_del_departamento: req.body.c_digo_dane_del_departamento,
        departamento: req.body.departamento,
        c_digo_dane_del_municipio: req.body.c_digo_dane_del_municipio,
        municipio: req.body.municipio,
    });
    //await newCity.save();
    res.json({msg: "City created successfully", status: true})
}
*/

ctrlCityMaster.list = async (req, res) => {
    const citys = await CityMaster.find({}).sort({"municipio": 1}).exec();
    res.json(citys);
}

ctrlCityMaster.search = async (req, res ) => {
    const citys = await CityMaster.find( { municipio : { $regex: ".*" + req.body.address + ".*" } })
    res.json(citys)
};

module.exports = ctrlCityMaster