// CLASSE MÃE

class Voo {

constructor(codigo, origem, destino){

this.codigo = codigo
this.origem = origem
this.destino = destino
this.altitude = 0

}

decolar(){

this.altitude = 10000

document.getElementById("aviao").classList.add("voando")

}

pousar(){

this.altitude = 0

document.getElementById("aviao").classList.remove("voando")

}

}



// SUBCLASSE JATO

class JatoExecutivo extends Voo {

constructor(codigo, origem, destino){

super(codigo, origem, destino)

this.modoSupersonico = false

}

ativarSupersonico(){

this.modoSupersonico = true
this.altitude = 20000

}

desativarSupersonico(){

this.modoSupersonico = false
this.altitude = 10000

}

}



// SUBCLASSE CARGA

class VooCarga extends Voo {

constructor(codigo, origem, destino, capacidadeMaxima){

super(codigo, origem, destino)

this.capacidadeMaxima = capacidadeMaxima
this.cargaAtual = 0

}

embarcarCarga(peso){

if(this.cargaAtual + peso <= this.capacidadeMaxima){

this.cargaAtual += peso

}else{

alert("Capacidade máxima atingida")

}

}

}



// OBJETOS

let jato = new JatoExecutivo("EX001","Curitiba","São Paulo")

let cargueiro = new VooCarga("CG001","Rio","Manaus",10000)



// ATUALIZA TELA

function atualizarTela(){

document.getElementById("codigo").innerText = jato.codigo
document.getElementById("origem").innerText = jato.origem
document.getElementById("destino").innerText = jato.destino
document.getElementById("altitude").innerText = jato.altitude

document.getElementById("carga").innerText = cargueiro.cargaAtual

}



// BOTÕES

function decolar(){

jato.decolar()
atualizarTela()

}

function pousar(){

jato.pousar()
atualizarTela()

}

function ativarSupersonico(){

jato.ativarSupersonico()
atualizarTela()

}

function desativarSupersonico(){

jato.desativarSupersonico()
atualizarTela()

}

function embarcar(){

let peso = Number(document.getElementById("peso").value)

cargueiro.embarcarCarga(peso)

atualizarTela()

}



atualizarTela()
const img = document.getElementById("imagem");

let tempo = 0;

function animar(){
    tempo += 0.02;

    let y = Math.sin(tempo) * 30;   // sobe e desce
    let x = tempo * 2;              // move um pouco para frente

    img.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(animar);
}

animar();