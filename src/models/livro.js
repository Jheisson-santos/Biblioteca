let nextID = 2

const model = (body, id = nextID++)=>{
    if(body.titulo != '' && body.titulo != undefined && 
    body.autor != '' && body.autor != undefined &&
    body.genero != '' && body.genero != undefined &&
    body.ano != '' && body.ano != undefined){
        return{
            id,
            titulo: body.titulo,
            autor: body.autor,
            genero: body.genero,
            ano: body.ano
        }
    }
}

module.exports = model