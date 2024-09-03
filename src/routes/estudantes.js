const express = require('express')
const router = express.Router()
const estudantes = require('../controllers/estudantes.js')

router.get('/', (req, res)=>{
    res.json(estudantes.index())
})

router.get('/:id', (req, res)=>{
    res.json(estudantes.show(req.params.id))
})

router.post('/', (req,res)=>{
    const code = estudantes.store(req.body)
    res.status(code).json()
})

router.put('/:id', (req,res)=>{
    const code = estudantes.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete('/:id', (req, res)=>{
    const code = estudantes.destroy(req.params.id)
    res.status(code).json()
})

module.exports = router