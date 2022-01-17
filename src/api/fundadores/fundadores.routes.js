const FundadorRoutes = require('express').Router()
const { isAuth } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')
const { postNewFundador, getAllFundadores, getFundador, patchFundador, deleteFundador } = require('./fundadores.controller')


FundadorRoutes.get('/', getAllFundadores)
FundadorRoutes.get('/:id', getFundador)

//solo los admins pueden hacer esto//
/*  FundadorRoutes.post('/', upload.single('img'), postNewFundador) 
 FundadorRoutes.patch('/:id', [isAuth], upload.single('img'), patchFundador) 
 FundadorRoutes.delete('/:id', [isAuth], upload.single('img'), deleteFundador) 
 */
module.exports = FundadorRoutes