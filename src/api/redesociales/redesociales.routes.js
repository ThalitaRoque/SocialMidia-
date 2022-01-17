const RedesocialRoutes = require('express').Router()
const { isAuth } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')
const { postNewRedesocial, getAllRedesociales, getRedesocial, patchredesocial, deleteRedesocial } = require('./redesociales.controller')


SerieRoutes.get('/', getAllRedesociales)
SerieRoutes.get('/:id', getRedesocial)

//solo los admins pueden hacer esto//
/* RedesocialRoutes.post('/', upload.single('img'), postNewRedesocial)
RedesocialRoutes.patch('/:id', upload.single('img'), patchRedesocial)
RedesocialRoutes.delete('/:id', [isAuth], upload.single('img'), deleteRedesocial ) */

module.exports = RedesocialRoutes