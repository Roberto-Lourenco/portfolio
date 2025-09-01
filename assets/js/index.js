/*
  ========== Scripts Página Sobre mim ==========
  Sumário
    - Cria o efeito escrita automática.
    - Seleciona o Index de um item da lista, depois percorre o texto do Item.
    - Cria um setTimeout curto para cada digitação. Ao terminar o loop de um item da lista(Escrever e apagar) ele adiciona um intervado de 1,2s.
    - Eu tive que adicionar um width no css do .span_typing. Porque quando o script apagava o texto, a linha sumia e bugava o layout da section.
 */

const dynamicText = document.querySelector(".span_typing")
const words = ["Desenvolvedor de Software", "Engenheiro de Software", "Desenvolvedor Backend", "Apaixonado por Inovação", "Futuro Arquiteto de Software"]

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false; // Variavel que alterna se é pra escrever ou apagar. (False = Escreve || True = Apaga)

// Constante com função anonima
const typeEffect = () =>{
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

        // 1 - isDeleting começa como false e o charIndex só será igual ao currentWord.length quando terminar de escrever tudo. Então esse if é verdadeiro.
    if (!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 100);

        // 3 - Esse else if irá apagar todos os chars do index. Quando charIndex == 0 ele irá parar de cair aqui, ou seja, terá deletado todos os chars.
    } else if (isDeleting && charIndex > 0){
        charIndex --;
        setTimeout(typeEffect, 80)

        // 2 - Quando charIndex < currentWord.length for falso ou charIndex == 0, ele irá cair aqui. E esse else irá inverter o atributo booleano do isDeleting.
    } else {
        isDeleting = !isDeleting;

        /* 4 - Operador ternário que decide se é pra avançar para a próxima palavra ou não.
             - Se chegar no ultimo item da lista, ele volta para o primeiro item.
             - Se !isDeleting for falso significa que tá escrevendo, então ele não faz nada e mantém o mesmo item: " : wordIndex "
             - Se for True significa que terminou de apagar e tá pronto para a próxima palavra:  " (wordIndex +1) % words.length ".
        */
        wordIndex = !isDeleting ? (wordIndex +1) % words.length : wordIndex; 
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();