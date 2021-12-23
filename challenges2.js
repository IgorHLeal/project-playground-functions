// Desafio 10
// Requisito concluído com a ajuda do Pedro Fideles e da Lalá Namatela por chamada de vídeo no zoom após o Happy Hour de sexta feira dia 03/12
function techList(arrayTechs, name) {
    // Criar uma variável auxiliar para armazenar o array com lista de tecnologias
    let arrayRetorno = [];
    let arrayTechsOrdenado = arrayTechs.sort();
    // Criar um if para retornar uma mensagem se o array estiver vazio
    if (arrayTechs.length === 0) {
      return 'Vazio!';
    }
  
    for (let index = 0; index < arrayTechsOrdenado.length; index += 1) {
      // Depois de percorrer o array 'empurrar' cada item do arrayRetorno
      arrayRetorno.push({
        tech: arrayTechsOrdenado[index],
        name: name
      })
    }
    return arrayRetorno;
  }
  
  // Desafio 11
  /*  O slice foi pesquisado no MDN (link:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
   O join também foi pesquisado no MDN (link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
   Obtive ajuda de pessoas estudanes da Trybe: Pedro Fideles, Imar Mendes, Matheus Pigatto e José Wilson e também da Ana Laura Berger(instrutora), todos eles via Slack */
  function generatePhoneNumber(array) {
    // Criar variáveis auxiliares
    let numeroDeTelefone = "";
    let contador = 0;
  
    if (array.length !== 11) {
      return "Array com tamanho incorreto.";
    }
  
    for (let numero in array) {
      if (array[numero] < 0 || array[numero] > 9) {
        return "não é possível gerar um número de telefone com esses valores";
      }
        for (let index of array) {
          if (numero == index) {
            contador += 1;
          }
        }
        if (contador >= 3) {
          return "não é possível gerar um número de telefone com esses valores";
        }
        contador = 0;
      }
  
      numeroDeTelefone = "(" + array.slice(0, 2).join("") + ") " + array.slice(2, 7).join("") + "-" + array.slice(7, 11).join("");
  
      return numeroDeTelefone;
  
    }
  
  // Desafio 12
  function triangleCheck(lineA, lineB,lineC) {
  if (lineA < (lineB + lineC) &&
      lineB < (lineA + lineC) &&
      lineC < (lineA + lineB) &&
      lineA > Math.abs(lineB - lineC) &&
      lineB > Math.abs(lineA - lineC) &&
      lineC > Math.abs(lineA - lineB)) {
    return true;
      } else {
        return false;
      }
  }
  
  // Desafio 13
  function hydrate() {
    // seu código aqui
  }
  
  module.exports = {
    generatePhoneNumber,
    techList,
    hydrate,
    triangleCheck,
  };
  