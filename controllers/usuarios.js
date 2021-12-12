const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const {token, nombre} = req.query;
    res.json({
        msg: 'Petición a mi API',
        token,
        nombre
    });
};

const usuariosPut = (req, res = response) => {
    const {id} = req.params;
    res.json({
        msg: 'put a mi API',
        id
    });
};

const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;
    res.json({
        msg: 'post a mi API',
        nombre,
        edad
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete a mi API'
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch a mi API'
    });
};


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}