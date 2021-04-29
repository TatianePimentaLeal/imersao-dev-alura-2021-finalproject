var cartaSherlockHolmes = {
  nome:"Sherlock Holmes",
  imagem: "https://www.contato.net/contato.net/uploads/noticia_474/1540293386_sherlock.jpg",
  atributos: {
    ataque: 85, 
    defesa: 60,
    mente:  99
  }
}

var cartaJohnWatson = {
  nome:"John Watson",      
  imagem:"https://pbs.twimg.com/profile_images/826373974326132736/gvwXygnq.jpg",
  atributos:{
   ataque:73,
   defesa:70,
   mente:60
  }
}

var cartaMoriarty = {
  nome:"Moriarty",
  imagem:"https://vignette.wikia.nocookie.net/villains/images/8/82/Andrew_Scott_Moriarty.png/revision/latest?cb=20140305170258",
  atributos:{
    ataque:89,
    defesa:70,
    mente:89
  }
}

var cartaMrsHudson = {
  nome:"Mrs Hudson",
  imagem:"https://d.newsweek.com/en/full/542550/una-stubbs-mrs-hudson.jpg?w=1600&h=1600&q=88&f=247948551c621d9f5430057de9f73e57",
  atributos:{
    ataque:55, 
    defesa:62,
    mente: 57
  }
}

var cartaMollyHopper = {
  nome:"Molly Hooper",
imagem:"https://sherlockholmestv.files.wordpress.com/2016/03/molly-molly-hooper-31521691-500-500.jpg",
  atributos:{
    ataque:60, 
    defesa:60,
    mente: 75
  }
}

var cartaGregLestrade = {
  nome:"Greg Lestrade",
  imagem: "https://i.pinimg.com/originals/c4/0a/f4/c40af4198552607bd95a5b57a22daaad.jpg",
  atributos: {
    ataque: 67, 
    defesa: 58,
    mente:  56
  }
}

var cartaEurusHolmes = {
  nome:"Eurus Holmes",
  imagem: "https://qph.fs.quoracdn.net/main-qimg-6f84ed77b63c7820dfae72072d71332d",
  atributos: {
    ataque: 90, 
    defesa: 80,
    mente:  99
  }
}

var cartaMycroftHolmes = {
  nome:"Mycroft Holmes",
  imagem: "https://boraassistir.com.br/media/images/4881907-low-sherlock.jpg",
  atributos: {
    ataque: 90, 
    defesa: 95,
    mente:  99
  }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaSherlockHolmes, cartaJohnWatson, cartaMoriarty, cartaMrsHudson, cartaMollyHopper, cartaGregLestrade, cartaEurusHolmes, cartaMycroftHolmes]
                         // 0          1                  2              3              4                 5                 6           7              

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  
  divPlacar.innerHTML = html
}

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)
   
  var numeroCartaJogador = parseInt(Math.random() * cartas.length)
  cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)
 
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  
  exibeCartaJogador()  
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage= `url(${cartaJogador.imagem})`
  var nome = `<p class= "carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }
  
 var html = "<div id='opcoes' class='carta-status'>" 
  
 divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}

function obtemAtributoSelecionado(){
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked){
      return radioAtributo[i].value
    }
  }
}

function jogar(){
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obtemAtributoSelecionado()
  
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) { 
   htmlResultado = '<p class="resultado-final">Elementar! Você venceu.</p>'
   pontosJogador++
 } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
   htmlResultado = '<p class="resultado-final">Perdeu, mais sorte na próxima.</p>'
   pontosMaquina++
 } else {
   htmlResultado = '<p class="resultado-final">Empatou. Estamos quites.</p>'
 }
  
if (cartas.length == 0){
  alert("Fim de jogo!")
  if (pontosJogador > pontosMaquina){
    htmlResultado = '<p class="resultado-final">Elementar! Você venceu.</p>'
  } else if (pontosMaquina > pontosJogador) {
     htmlResultado = '<p class="resultado-final">Perdeu, mais sorte na próxima.</p>'
  } else {
    htmlResultado = '<p class="resultado-final">Empatou. Estamos quites.</p>'
  }
} else {
  document.getElementById('btnProximaRodada').disabled = false
}
 
  divResultado.innerHTML = htmlResultado
  document.getElementById('btnJogar').disabled = true
    
  atualizaPlacar()
  exibeCartaMaquina()  
  atualizaQuantidadeDeCartas()
 }

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage= `url(${cartaMaquina.imagem})`
  var nome = `<p class= "carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaMaquina.atributos){
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
  }
  
 var html = "<div id='opcoes' class='carta-status'>" 
  
 divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}

function proximaRodada(){
    var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = "" 
}