//VARIAVEIS
const input_text = document.querySelector(".input_text");
const resultado = document.querySelector(".resultado");
const resultado_container = document.querySelector(".resultado_container");
const btn_criptografar = document.querySelector(".btn_criptografar");
const btn_descriptografar = document.querySelector(".btn_descriptografar");
const btn_copiar = document.querySelector(".btn_copiar");

btn_criptografar.addEventListener("click", function () {
  if (!validarInput(input_text.value)) {
    return (resultado.textContent = "Texto Inválido");
  }
  const textoCriptografado = criptografar(input_text.value);
  btn_copiar.style.display = "block";
  return (resultado.textContent = textoCriptografado);
});

btn_descriptografar.addEventListener("click", function () {
  if (!validarInput(input_text.value)) {
    return (resultado.textContent = "Texto Inválido");
  }
  const textoCriptografado = descriptografar(input_text.value);
  return (resultado.textContent = textoCriptografado);
});

btn_copiar.addEventListener("click", function () {
  navigator.clipboard
    .writeText(resultado.textContent)
    .then(() => {
      console.log("Texto copiado para a área de transferência!");
    })
    .catch((err) => {
      console.error("Falha ao copiar texto: ", err);
    });
});

function validarInput(texto) {
  const regex = /^[a-z0-9 .,!?'-]*$/;
  return regex.test(texto);
}

function criptografar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function descriptografar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}
