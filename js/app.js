let totalGeral = 0;
let totalItens = 0;

function obterProduto() {
  const produtoSelect = document.getElementById("produto").value;
  const partes = produtoSelect.split(" - R$");

  if (!produtoSelect || produtoSelect.trim() === "") {
    alert("Selecione um produto válido.");
    return;
  }

  const nome = partes[0];
  const valorUnitario = parseFloat(partes[1]);

  return { nome, valorUnitario };
}

function obterQuantidade() {
  const quantidade = parseInt(document.getElementById("quantidade").value);

  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Insira uma quantidade válida.");
    return null;
  }

  return quantidade;
}

function calcularSubtotal(qtd, valorUnitario) {
  return qtd * valorUnitario;
}

function atualizarCarrinho(nome, qtd, subtotal) {
  const carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML += `<section class="carrinho__produtos__produto">
      <span class="texto-azul">${qtd}x</span> ${nome}
      <span class="texto-azul">R$${subtotal.toFixed(2)}</span>
    </section>`;
}

function atualizarTotal(subtotal) {
  totalGeral += subtotal;
  document.getElementById("valor-total").textContent = `R$${totalGeral.toFixed(
    2
  )}`;
}

function atualizarProdutos() {
  document.getElementById("total-itens").textContent = totalItens;
}

function limparCampos() {
  document.getElementById("quantidade").value = "";
}

function limpar() {
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "R$0";
}

function adicionar() {
  const { nome, valorUnitario } = obterProduto();
  const quantidade = obterQuantidade();

  if (!nome || !valorUnitario || !quantidade) return;

  const subtotal = calcularSubtotal(quantidade, valorUnitario);

  atualizarCarrinho(nome, quantidade, subtotal);
  atualizarTotal(subtotal);

  totalItens += quantidade;
  atualizarProdutos();
}
