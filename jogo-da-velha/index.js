
function listarDadosSessao(){
    firebase.database().ref('sessaoX').on('value', snapshot => {
        snapshot.forEach(element => {
            
        });
    });
}

listarDadosSessao();

function atualizarJogo(id, quadrado,jogador){
    firebase.database().ref('sessaoX').child('q'+id).set(quadrado);
    firebase.database().ref('sessaoX').child('proxJogador').set(jogador);
}


var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado')


mudarJogador('X');

function escolherQuadrado(id){
    var valor;
    var quadrado = document.getElementById(id);

    if(vencedor !== null ){
        return;
    }

    if(quadrado.innerHTML != '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#aaa';
    valor = jogador;
    

    if(jogador === 'X'){
        jogador = 'O'
    }else{
        jogador = 'X'
    }
    mudarJogador(jogador);
    checarVencedor();

    atualizarJogo(id,valor,jogador);
    
}
 
function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor(){
    var quadrado1 = document.getElementById("1");
    var quadrado2 = document.getElementById("2");
    var quadrado3 = document.getElementById("3");
    var quadrado4 = document.getElementById("4");
    var quadrado5 = document.getElementById("5");
    var quadrado6 = document.getElementById("6");
    var quadrado7 = document.getElementById("7");
    var quadrado8 = document.getElementById("8");
    var quadrado9 = document.getElementById("9");

    if(checarSequencia(quadrado1, quadrado2, quadrado3))
    {
        mudarcorquadrado(quadrado1, quadrado2, quadrado3)
        mudarVencedor(quadrado1);
        return;
    }
     if(checarSequencia(quadrado4, quadrado5, quadrado6))
    {
        mudarcorquadrado(quadrado4, quadrado5, quadrado6)
        mudarVencedor(quadrado4);
        return;
    }
    if(checarSequencia(quadrado7, quadrado8, quadrado9))
    {
        mudarcorquadrado(quadrado7, quadrado8, quadrado9)
        mudarVencedor(quadrado7);
        return;
    }
    if(checarSequencia(quadrado1, quadrado4, quadrado7))
    {
        mudarcorquadrado(quadrado1, quadrado4, quadrado7)
        mudarVencedor(quadrado1);
        return;
    }
        if(checarSequencia(quadrado2, quadrado5, quadrado8))
    {
        mudarcorquadrado(quadrado2, quadrado5, quadrado8)
        mudarVencedor(quadrado2);
        return;
    }
    if(checarSequencia(quadrado3, quadrado6, quadrado9))
    {
        mudarcorquadrado(quadrado3, quadrado6, quadrado9)
        mudarVencedor(quadrado3);
        return;
    }
    if(checarSequencia(quadrado1, quadrado5, quadrado9))
    {
        mudarcorquadrado(quadrado1, quadrado5, quadrado9)
        mudarVencedor(quadrado1);
        return;
    }
    if(checarSequencia(quadrado3, quadrado5, quadrado7))
    {
        mudarcorquadrado(quadrado3, quadrado5, quadrado7)
        mudarVencedor(quadrado3);
    }
}
function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarcorquadrado(quadrado1,quadrado2,quadrado3){
    quadrado1.style.color = '#0f0';
    quadrado2.style.color = '#0f0';
    quadrado3.style.color = '#0f0';
}

function checarSequencia(quadrado1,quadrado2,quadrado3){
    var igual=false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        igual = true;
    }

    return igual;
}


function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i)
        quadrado.style.color = '#aaa';
        quadrado.innerHTML='-';
    }
}









mudarJogador('X');