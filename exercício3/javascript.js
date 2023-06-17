function contar() {
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fi')
    var passo = document.getElementById('pas')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('erro')
    }
    else{
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
    }
    if (p -= 0){
        p = p + 1
    }

    


}