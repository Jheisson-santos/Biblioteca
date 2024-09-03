const express = require('express')
const router = express.Router()
const aluguel = require('../controllers/alugueis.js')
const data_aluguel = require('../middlewares/newDate.js')

router.get('/', (req, res)=>{
    res.json(aluguel.index())
})

router.get('/:id', (req, res)=>{
    res.json(aluguel.show(req.params.id))
})

router.post('/', data_aluguel,(req,res)=>{
    const code = aluguel.store(req.body)
    res.status(code).json()
})

router.put('/:id',data_aluguel, (req,res)=>{
    const code = aluguel.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete('/:id', (req, res)=>{
    const code = aluguel.destroy(req.params.id)
    res.status(code).json()
})

module.exports = router