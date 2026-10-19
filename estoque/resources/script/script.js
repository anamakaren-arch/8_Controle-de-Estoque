// Array original com 10 produtos
const produtos = ["Arroz", "Feijão", "Macarrão", "Café", "Açúcar", "Sal", "Óleo", "Vinagre", "Molho", "Leite"];

// push(): Adiciona novos itens à lista
produtos.push("Biscoito", "Manteiga");

// includes(): Verifica se o produto existe e exibe a mensagem
const busca = "Macarrão";
if (produtos.includes(busca)) {
  console.log(`Encontrado: ${busca} está na lista.`);
} else {
  console.log(`Não encontrado: ${busca} não está na lista.`);
}

// filter(): Cria nova lista com nomes maiores que 5 letras
const filtrados = produtos.filter(p => p.length > 5);

// Exibe os resultados no console
console.log("Original:", produtos);
console.log("Filtrado:", filtrados);




