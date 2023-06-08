var agora = new Date()
var hora = agora.getDay

switch(hora){
    case 1:
        console.log(domingo)
        break
    case 2:
        console.log('segunda')
        break
    case 3:
        console.log('terça')
        break
    case 4:
        console.log('quarta')
        break
    case 5:
        console.log('quinta')
        break
    case 6:
        console.log('sexta')
        break
    default:
        console.log('sábado')
}