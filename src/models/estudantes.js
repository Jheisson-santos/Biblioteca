let nextID = 2

const model = (body, id = nextID++)=>{
    if(body.nome != '' && body.nome != undefined && 
    body.matricula != '' && body.matricula != undefined &&
    body.curso != '' && body.curso != undefined &&
    body.ano != '' && body.ano != undefined){
        return{
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano
        }
    }
}

module.exports = model