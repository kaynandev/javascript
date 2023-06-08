var agora = new Date()
var hora = agora.getHours()

if (hora >= 6) {
    console.log('bom dia')

}
else if(hora >= 12) {
    console.log('boa tarde')
}
else if (hora >= 18) {
    console.log('boa noite')
}
else if (hora >= 1) {
    console.log('boa madrugada')
}