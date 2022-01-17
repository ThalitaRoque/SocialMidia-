const Fundador = require('./fundadores.model')
const { setError } = require('../../utils/error/error')
const { deleteFile } = require('../../middlewares/deleteFile')


const postNewFundador = async (req, res, next) => {
    try {
        const newFundador = new Fundador()
        newFundador.name = req.body.name
        newFundador.birth_date = req.body.birth_date
        newFundador.city = req.body.role
        if (req.file) {
            newFundador.img = req.file.path
        }
        const fundadorDB = await newFundador.save()
        return res.status(201).json(fundadorDB)
    } catch (error) {
        return next(setError(500, 'Fundador not saved'))
    }
}

const getAllFundadores = async (req, res, next) => {
    try {
        const fundadorsDB = await Fundador.find()
        res.status(200).json(fundadorsDB)
    } catch (error) {
        return next(setError(500, 'Fundadores failed server'))
    }
}

const getFundador = async (req, res, next) => {
    try {
        const { id } = req.params
        const fundadorDB = await Fundador.findById(id)
        if (!fundadorDB) {
            return next(setError(404, 'Fundador not found'))
        }
        return res.status(200).json(fundadorDB)
    } catch (error) {
        return next(setError(500, 'Fundador server error'))
    }
}

const patchFundador = async (req, res, next) => {
    try {
        const { id } = req.params
        const patchFundador = new Fundador(req.body)
        patchFundador._id = id
        if (req.file) {
            patchFundador.img = req.file.path
        }
        const fundadorDB = await Fundador.findByIdAndUpdate(id, patchActor)
        if (!fundadorDB) {
            return next(setError(404, 'Fundador not found'))
        }
        if (fundadorDB.img) deleteFile(fundadorDB.img)
        return res.status(200).json({ new: patchFundador, old: fundadorDB })
    } catch (error) {
        return next(setError(500, 'Fundador Patch server error'))
    }
}

const deleteFundador = async (req, res, next) => {
    try {
        const { id } = req.params
        const fundadorDB = await Fundador.findByIdAndDelete(id)
        if (!fundadorDB) {
            return next(setError(404, 'Fundador not found'))
        }
        if (fundadorDB.img) deleteFile(fundadorDB.img)
        return res.status(200).json(fundadorDB)
    } catch (error) {
        return next(setError(500, 'Fundador removed server error'))
    }
}

module.exports = {
    postNewFundador,
    getAllFundadores,
    getFundador,
    patchFundador,
    deleteFundador
}
