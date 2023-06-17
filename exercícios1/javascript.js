function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manhã.png'
    }
    else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'tarde.png'

    }

    else if (hora >= 19 && hora <= 24){
        //boa noite
        img.src = 'noite.png'


    }
}