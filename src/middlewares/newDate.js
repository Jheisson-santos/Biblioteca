const aluguel = (req, res , next)=>{
    const data = new Date();
    const opcoes = {day:'2-digit',month:'2-digit', year:'numeric'}
    const dataFormatada = data.toLocaleDateString('pt-br', opcoes)
    let dia = dataFormatada.split('/')
    let atual = req.body.data_aluguel.split('/')

    if(dia[0] == atual[0] && dia[1] == atual[1] && dia[2] == atual[2]){
        req.body.data_aluguel = req.body.data_aluguel
        next()
    } else {
        res.status(400).json()
    }
    
}

module.exports = aluguel