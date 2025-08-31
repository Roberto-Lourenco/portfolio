const dynamicText = document.querySelector(".span_typing")
const words = ["Desenvolvedor de Software", "Engenheiro de Software", "Desenvolvedor Backend", "Apaixonado por Inovação", "Futuro Arquiteto de Software"]
let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () =>{
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0){
        charIndex --;
        setTimeout(typeEffect, 80)
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex +1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();