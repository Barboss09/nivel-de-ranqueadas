let ranking = winBalance(25, 0)

let nomeDoHeroi = "Dante "

function winBalance (vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado
}
switch(true){
    case ranking <= 10:
    ranking = "Ferro" 
    break

    case ranking > 10 && ranking <= 20:
    ranking = "Bronze"
    break

    case ranking > 21 && ranking <= 30:
    ranking = "Prata"
    break
    
    case ranking > 31 && ranking <= 40:
    ranking = "Ouro"
    break

    case ranking > 41 && ranking <= 50:
    ranking = "Platina"
    break

    case ranking > 51 && ranking <= 60:
    ranking = "Diamante"
    break

    case ranking > 61 && ranking <= 70:
    ranking = "Lendário"
    break

    case ranking > 80:
    ranking = "Imortal"
    break
}


console.log ("O Herói " + nomeDoHeroi + "está no ranking de nível " + ranking )



