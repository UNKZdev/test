function calcularImpacto() {
  const transporte = document.getElementById('transporte').value;
  const energia = document.getElementById('energia').value;
  const alimentacao = document.getElementById('alimentacao').value;
  const reciclagem = document.getElementById('reciclagem').value;
  const descartaveis = document.getElementById('descartaveis').value;
  const banho = document.getElementById('banho').value;
  const agua = document.getElementById('agua').value;
  const compras = document.getElementById('compras').value;
  const arCond = document.getElementById('ar-cond').value;
  const eletronicos = document.getElementById('eletronicos').value;
  const roupas = document.getElementById('roupas').value;
  const residuos = document.getElementById('residuos').value;

  let impacto = 0;

  // Transporte
  if (transporte === 'carro') impacto += 6;
  else if (transporte === 'moto') impacto += 5;
  else if (transporte === 'onibus') impacto += 4;
  else if (transporte === 'bicicleta' || transporte === 'a-pe') impacto += 1;

  // Energia
  if (energia === 'sim') impacto += 3;

  // Alimentação
  if (alimentacao === 'diariamente') impacto += 5;
  else if (alimentacao === 'algumas-vezes') impacto += 3;
  else if (alimentacao === 'raramente') impacto += 2;
  else impacto += 1;

  // Reciclagem
  if (reciclagem === 'nunca') impacto += 3;
  else if (reciclagem === 'as-vezes') impacto += 2;

  // Descartáveis
  if (descartaveis === 'sempre') impacto += 3;
  else if (descartaveis === 'as-vezes') impacto += 2;

  // Banho
  if (banho === 'mais-15') impacto += 3;
  else if (banho === '10-15') impacto += 2;
  else impacto += 1;

  // Água (torneira, mangueira, etc.)
  if (agua === 'desperdico') impacto += 3;
  else if (agua === 'moderado') impacto += 2;
  else impacto += 1;

  // Compras
  if (compras === 'frequente') impacto += 3;
  else if (compras === 'ocasional') impacto += 2;
  else impacto += 1;

  // Ar-condicionado
  if (arCond === 'diario') impacto += 4;
  else if (arCond === 'as-vezes') impacto += 2;

  // Eletrônicos
  if (eletronicos === 'muito') impacto += 3;
  else if (eletronicos === 'moderado') impacto += 2;

  // Roupas (fast fashion)
  if (roupas === 'mensal') impacto += 3;
  else if (roupas === 'trimestral') impacto += 2;
  else impacto += 1;

  // Resíduos orgânicos
  if (residuos === 'muito-desperdicio') impacto += 3;
  else if (residuos === 'moderado') impacto += 2;
  else impacto += 1;

  // Resultado geral
  const nivel = impacto <= 12 ? 'baixo' : impacto <= 22 ? 'médio' : 'alto';
  const co2Dia = impacto * 2.5;
  const co2Ano = co2Dia * 365;
  const arvores = Math.ceil(co2Ano / 22);

  document.getElementById('resultado').innerHTML = `
    <p>🌍 Seu impacto ambiental diário é considerado <strong>${nivel.toUpperCase()}</strong>.</p>
    <p>Você emite aproximadamente <strong>${co2Dia.toFixed(1)} kg</strong> de CO₂ por dia.</p>
    <p>Em um ano, isso equivale a <strong>${co2Ano.toFixed(0)} kg</strong> de CO₂.</p>
    <p>Para compensar, seria necessário plantar cerca de <strong>${arvores}</strong> árvores por ano 🌳.</p>
  `;
}
