let content = document.getElementById("content");
let nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", changeContent);

let page = 1;
showPage0();

function changeContent(){
    if (page <= 6){
        content.innerHTML = "";
    }
    showPage1();
    showPage2();
    showPage3();
    showPage4();
    showPage5();
    showPage6();
    page++;
}

function typeWriterEffect(element, txt, i) {
    if (i < txt.length) {
        element.innerHTML += txt.charAt(i);
        i++;
        setTimeout(() => {typeWriterEffect(element, txt, i)}, 50);
    }
}

function insertParagraph(message){
    let paragraph = document.createElement("p");
    content.appendChild(paragraph);
    let text = message;
    typeWriterEffect(paragraph, text, 0);
}

function insertImage(src){
    let img = document.createElement("img");
    img.src = src;
    content.appendChild(img);
}

function showPage0(){
    insertParagraph(`Feliz Cumpleaños mi Amor.
    Este regalo esta hecho para ti con mucho amor y afecto UwU`)
}

function showPage1(){
    if (page == 1){
        insertParagraph(`Eres mi futuro bebe, y espero que algun dia
        podamos estar juntos de nuevo <3, disfruta el regalo amor:`)
    }
}

function showPage2(){
    if (page == 2){
        insertParagraph(`El regalo es una coleccion de fotos nuestras amor,
        me gusta mucho pasar tiempo contigo mi vida, eres lo mejor que me ha pasado bb,
        tan lindo, tan amable, mira en la imagen esos ojos tiernos y 
        hermosos que tienes bebe de crema UwU, espero podamos tener mas y mas cuddles
        en el futuro!`)
        insertImage("together_cuddling.png");
    }
}

function showPage3(){
    if (page == 3){
        insertParagraph(`Recuerdas este dia cuando nos tomamos fotos en este lindo mundo?,
        la luna y el oceano se ven tan bellos, pero no tan bellos como tu mi amor, eres tan
        especial para mi lo sabes?, no quiero perderte nunca bebe, te amo mucho, mira en la
        foto como acaricias mi dulzura, eres una hermosura >w<`)
        insertImage("together_in_the_moon.png");
    }
}

function showPage4(){
    if (page == 4){
        insertParagraph(`En esta foto nos vemos tan felices amor, y tambien a punto de darnos
        un besito con mucho amor UwU, tus besos en argentinas fueron tan tiernos amor, quiero
        darte muchos y muchos mas amor!!!!!!`)
        insertImage("together_in_the_moon_2.png");
    }
}

function showPage5(){
    if (page == 5){
        insertParagraph(`En esta foto nos vemos muy bien amor, creo que es una de las mejores
        fotos que tomamos en argentina juntos, estamos en el zoologico recuerdas? fue un dia
        genial y hubo muchas aves hermosas y animales hermosos, es uno de los momentos que
        atesorare con mucho amor y recordare creo que practicamente por el resto de mi vida y
        mas porque estuviste alli conmigo <3`)
        insertImage("together_in_the_zoo.jpg");
    }
}

function showPage6(){
    if (page == 6){
        insertParagraph(`Esta es la pagina final y solo quiero decirte gracias Gabriel, eres
        el mejor mi amor, te amo mucho, te deseo, te adoro, quiero pasar el resto de mi vida
        contigo para que nos tratemos el uno al otro con mucho amor y cariño UwU, espero
        que te haya gustado este regalo, cuando lo estaba haciendo me puse a llorar un poco
        debido a que es muy hermoso todo lo que hemos pasado bebe, te amo Gabriel. Je t'aime
        mon petit coeur <3`)
        insertImage("je_taime.jpg");
        nextButton.style.display = "none";
    }
}