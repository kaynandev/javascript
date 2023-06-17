function clicar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('ida')
   var res = document.getElementById('res')
   

   if (fano.value.length == 0 || fano.value > ano) {
        
   }
   else {
    var sexo = document.getElementsByName('isex')
    var idade = ano - (fano.value)
    var gênero = ''
    var img = document.getElementById('foto')
    
   
   
    
   }
   if (sexo[0].checked){
    gênero = 'homem'
        if (idade > 0 && idade < 10){
        //criança
        img.src = 'c-m.png'
    }
        else if (idade < 50){
        //jovem
        img.src = 'j-m.png'
    }
    else{
        //idoso
        img.src = 'i-m.png'
    }
    
    res.innerHTML = `detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)

   }
   else if (sexo[1].checked){
    gênero = 'mulher'
    if (idade > 0 && idade < 10){
        //criança
        img.src = 'c-f.png'
    }
        else if (idade < 50){
        //jovem
        img.src = 'j-f.png'
    }
    else{
        //idoso
        img.src = 'i-f.png'
    }
    
    res.innerHTML = `detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
    
    
    
    
   }
   
}