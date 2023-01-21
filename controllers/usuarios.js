const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    // const params = req.query
    // Desestructuración
    const { q, nombre, apikey, page = 1, limit = 10 } = req.query

    res.json({
        msg: res.statusCode + 'controlador',
        q,
        nombre,
        limit,
        apikey,
        page
    })
}

const usuariosPost = (req, res = response) => {

    // Desestructuración
    // const body = req.body;
    const { nombre, edad } = req.body

    res.json({
        msg: 'post',
        nombre,
        edad
    })
}

const usuariosPut = (req = request, res = response) => {

    // parametros que vienen de la request
    const id = req.params.id

    res.json({
        msg: 'put',
        id
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete'
    })
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}