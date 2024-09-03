let nextID = 2
const estudante = require('../controllers/estudantes.js')
const livro = require('../controllers/livro.js')

const model = (body, id = nextID++)=>{
    if(livro.show(body.livro_id)&& 
    estudante.show(body.estudante_id) &&
    body.data_devolucao != '' && body.data_devolucao != undefined){
        return{
            id,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id,
            data_aluguel: body.data_aluguel,
            data_devolucao: body.data_devolucao
        }
    }
}

module.exports = model