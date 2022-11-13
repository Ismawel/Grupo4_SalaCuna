const AsistenteParvulo = require('../models/AsistenteParvulo');

const createAsistenteParvulo = (req, res) => {
    const { NombreCompleto, FechaDeNacimiento, Domicilio, Rut, Telefono, Correo, InformacionRelevante, Foto } = req.body;
    const newAsistenteParvulo = new AsistenteParvulo({
        NombreCompleto,
        FechaDeNacimiento,
        Domicilio,
        Rut,
        Telefono,
        Correo,
        InformacionRelevante,
        Foto
    });
    newAsistenteParvulo.save((err, AsistenteParvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el Asistente parvulo", err })
        }
        return res.status(200).send(AsistenteParvulo)
    });
}

const getAsistenteParvulos = (req, res) => {
    AsistenteParvulo.find({}, (err, AsistenteParvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el Asistente parvulo" })
        }
        return res.status(200).send(AsistenteParvulo)
    });
}

const deleteAsistenteParvulo = (req, res) => {
    AsistenteParvulo.findByIdAndRemove(req.params.id)
        .then(function () {
            res.status(200).json("Se eliminò el asistente de parvulo");
        })
        .catch(function (err) {
            res.status(400).send("Error al eliminar el asistente de parvulo.");
        });
};

module.exports = {
    createAsistenteParvulo,
    getAsistenteParvulos,
    deleteAsistenteParvulo
}