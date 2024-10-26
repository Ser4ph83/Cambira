// aula do dia 18-04 //
alert("Olá mundo!");
console.log("Eita lasqueira, e agora?");
alert("Diga oi");
console.log("Vamos praticar?");
console.log("É hora de dar tchau");
let nome = prompt("Qual seu nome?");
alert("Olá, " + nome + ", tudo bem com você?");

// aula dia 21 e 22 //
function perguntarNome() {
    let nome = prompt("Diga seu nome por favor!");
    let idade = prompt("Diga sua idade por favor");
    let tempo = prompt("Como está o tempo aí? (Frio ou Calor)");
    let infoBox = document.getElementById('infoBox');
    
    // Verifica se o infoBox existe antes de tentar alterar
    if (infoBox) {
        // Atualiza o conteúdo da caixa de informações
        infoBox.innerHTML = `Nome: ${nome}<br>Idade: ${idade}<br>Tempo: ${tempo}`;
        infoBox.style.display = 'block'; // Exibe a caixa
    } else {
        console.error("Elemento infoBox não encontrado!");
    }
}

// Adicionando o evento de clique ao botão após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    if (btn) {
        btn.addEventListener('click', perguntarNome);
    } else {
        console.error("Botão não encontrado!");
    }
});
