const ctrlAdviserMaster = {},
AdviserMaster = require('../models/adviserMaster.model')

ctrlAdviserMaster.login = (req, res) => {
    req.body.user && req.body.password ?
        AdviserMaster?.findOne({ user: req.body.user }, (err, user) => {
            //console.log(user)
            //console.time("test")
            switch (true) {
                case (err):
                    res.send({ "msg": err })
                    break;
                case (user==null):
                    res.send({"msg":"No existe el usuario en la BD"});
                    break;
                case (user?.password == req.body.password):
                    let token = user.generarJWT()
                    res.send({ "msg": "Se puede loggear", token, "user": user.name})
                    break;
                case (user?.password != req.body.password):
                    res.send({ "msg": "La contraseña está erronea" })
                    break;
            }
            //console.timeEnd("test")
        })
        :
        res.send({ "msg": "Te falta usuario o contraseña" });
    }

ctrlAdviserMaster.create = async (req, res) => {
    const newAdviser = new AdviserMaster({
        name: req.body.name,
        id_type: req.body.id_type,
        identification: req.body.identification,
        email: req.body.email,
        adviserImage: req.body.adviserImage,
        phone1: req.body.phone1,
        phone2: req.body.phone2,
        workCity: req.body.workCity,
        workZone: req.body.workZone,
        user: req.body.user,
        password: req.body.password
    });
    await newAdviser.save();
    res.json({msg: "adviser created successfully", status: true})
}

ctrlAdviserMaster.list = async (req, res) => {
    const advisers = await AdviserMaster.find({}).sort({"name": 1}).exec();
    console.log(advisers);
    res.json(advisers);
}

ctrlAdviserMaster.update = async (req, res) => {
    const { _id, name, id_type, identification, email, adviserImage, phone1, phone2, workCity, workZone, status} = req.body;
    const filter = {_id: _id}
    const update = {
        name: name,
        id_type: id_type,
        identification: identification,
        email: email,
        adviserImage: adviserImage,
        phone1: phone1,
        phone2: phone2,
        workCity: workCity,
        workZone: workZone,
        status: status}
    await AdviserMaster.findOneAndUpdate(filter, update);
    res.json({ status: true });
};

ctrlAdviserMaster.delete = async (req, res) => {
    const { _id } = req.params;
    await AdviserMaster.deleteOne({ _id: _id });
    res.json({ status: true });
};

ctrlAdviserMaster.search = async (req, res ) => {
    const advisers = await AdviserMaster.find( { name : { $regex: ".*" + req.body.name + ".*" } })
    res.json(advisers)
};

module.exports = ctrlAdviserMaster