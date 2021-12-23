/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(valor1, valor2) {
    if (valor1 === true && valor2 === true) {
      return true;
    }
    return false;
  }
  
  // Desafio 2
  function calcArea(base, height) {
    return (base * height) / 2;
  }
  
  // Desafio 3
  // Para resolver este requisito usei o método split() que foi pesquisado no MDN Web Docs (link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)
  function splitSentence(string) {
    let arrayStrings = string.split(' ');
  
    return arrayStrings;
  }
  
  // Desafio 4
  // Essa forma de concatenar as strings foi pesquisada no site ESLint (link: https://eslint.org/docs/rules/prefer-template)
  function concatName(array) {
    let primeiroItem = array[0];
    let segundoItem = array[array.length - 1];
    let concat = `${segundoItem}, ${primeiroItem}`;
    return concat;
  }
  // console.log(concatName(['igor', 'paula', 'henrique', 'leal']));
  
  // Desafio 5
  function footballPoints(wins, ties) {
    return wins * 3 + ties * 1;
  }
  
  // Desafio 6
  // Exercício resolvido com ajuda da monitoria do Roberval no dia 03/12
  function highestCount(array) {
    let maiorNumero = array[0];
    let contador = 0;
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > maiorNumero) {
        maiorNumero = array[index];
      }
    }
    for (let index = 0; index < array.length; index += 1) {
      if (maiorNumero === array[index]) {
        contador += 1;
      }
    }
    return contador;
  }
  
  // Desafio 7
  /* O código foi feito usando o `Math.abs` que foi pesquisado no site da MDN (link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) e com ajuda dos colegas Gabriel Melo e Mauro Marchesan em uma trhead no Slack. */
  function catAndMouse(mouse, cat1, cat2) {
    let distanceCat1 = Math.abs(cat1 - mouse);
    let distanceCat2 = Math.abs(cat2 - mouse);
  
    if (distanceCat1 > distanceCat2) {
      return 'cat2';
    } if (distanceCat2 > distanceCat1) {
      return 'cat1';
    } if (distanceCat1 === distanceCat2) {
      return 'os gatos trombam e o rato foge';
    }
  }
  
  // Desafio 8
  // eslint-disable-next-line complexity
  function fizzBuzz(array) {
  // Criar uma variável de apoio que retornará o array de números.
    let retornoArray = [];
    // Fazer um laço de repetição
    for (let index = 0; index < array.length; index += 1) {
      // Fazer as condicionais com os cálculos e empurrar o resultado na variável de apoio.
      if ((array[index] % 5 === 0 && array[index] % 3 === 0)) {
        retornoArray.push('fizzBuzz');
      } else if (array[index] % 5 === 0) {
        retornoArray.push('buzz');
      } else if (array[index] % 3 === 0) {
        retornoArray.push('fizz');
      } else {
        retornoArray.push('bug!');
      }
    }
    return retornoArray;
  }
  
  // Desafio 9
  // O código foi feito usando o replace() que foi pesquisado no W3Schools (link: https://www.w3schools.com/jsref/jsref_replace.asp)
  function encode(retornoString) {
    for (let index = 0; index < retornoString.length; index += 1) {
      // Usar o switch/case para fazer a troca nas palavras.
      // eslint-disable-next-line default-case
      switch (retornoString[index]) {
      case 'a':
        retornoString = retornoString.replace('a', '1');
        break;
      case 'e':
        retornoString = retornoString.replace('e', '2');
        break;
      case 'i':
        retornoString = retornoString.replace('i', '3');
        break;
      case 'o':
        retornoString = retornoString.replace('o', '4');
        break;
      case 'u':
        retornoString = retornoString.replace('u', '5');
        break;
      }
    }
    return retornoString;
  }
  // Usar a mesma lógica do encode mas fazer o inverso nas letras e números
  // eslint-disable-next-line sonarjs/no-identical-functions
  function decode(retornoString) {
    for (let index = 0; index < retornoString.length; index += 1) {
      // eslint-disable-next-line default-case
      switch (retornoString[index]) {
      case '1':
        retornoString = retornoString.replace('1', 'a');
        break;
      case '2':
        retornoString = retornoString.replace('2', 'e');
        break;
      case '3':
        retornoString = retornoString.replace('3', 'i');
        break;
      case '4':
        retornoString = retornoString.replace('4', 'o');
        break;
      case '5':
        retornoString = retornoString.replace('5', 'u');
        break;
      }
    }
    return retornoString;
  }
  
  module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
  };
  