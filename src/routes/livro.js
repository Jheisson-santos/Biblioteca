const express = require('express')
const router = express.Router()
const livros = require('../controllers/livro.js')

router.get('/', (req, res)=>{
    res.json(livros.index())
})

router.get('/:id', (req, res)=>{
    res.json(livros.show(req.params.id))
})

router.post('/', (req,res)=>{
    const code = livros.store(req.body)
    res.status(code).json()
})

router.put('/:id', (req,res)=>{
    const code = livros.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete('/:id', (req, res)=>{
    const code = livros.destroy(req.params.id)
    res.status(code).json()
})

module.exports = router