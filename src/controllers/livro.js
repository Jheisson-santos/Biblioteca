const model = require('../models/livro.js')
const db = [{id:1, titulo: "senhor dos aneis", autor: "Tolkien", genero: "aventura", ano:"1937"}]

const store = (body)=>{
    const novo = model(body)
    if(novo){
        db.push(novo)
        return 200
    }
    return 400
}

const index = () => db

const show = (id)=>db.find((el)=>el.id == id)

const update = (body, id)=>{
    const index = db.findIndex((el)=>el.id == id)
    const novo = model(body, id)
    if(novo && index != -1){
        db[index] = novo
        return 200
    }
    return 400
}

const destroy = (id)=>{
    const index = db.findIndex((el)=> el.id == id)
    if(index != -1){
        db.splice(index, 1)
        return 200
    }
    return 400
}

module.exports = {store, index, show, update, destroy}