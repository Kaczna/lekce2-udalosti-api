// tady je místo pro náš program

// Úkol na lekci: Písmo v odstavci po najetí myši ztuční.

function ztucni() {
    document.querySelector('#js-paragraph').style.fontWeight ='bold';
    }
    
    // Domácí úkol 1: Tlačítko “červené po kliknutí” bude odstavci přidávat/odebírat třídu, která bude barvu písma v odstavci měnit na červenou.
    
    function zmenaBarvy() {
        let odstavec=document.querySelector('#js-paragraph');
        odstavec.classList.toggle("cervena");
    }
    
    // Domácí úkol 2: přidej tlačítko “větší po kliknutí”, které písmo zvětší o jeden pixel oproti jeho aktuální velikost.
    
    function vetsiPismo() {
        let odstavec=document.querySelector('#js-paragraph');
        odstavec.classList.add("pismo")
    }
    
    // Jak by se, prosím, dalo udělat, aby se písmo při každém dalším kliku zvětšilo o 1px? Nějak podobně jako níže nebo je to nesmysl? Díky.
    // function vetsiPismo() {
    //     let odstavec=document.querySelector('#js-paragraph');
    //     let velikostPisma = 16;
    //     odstavec.style.fontSize = velikostPisma + 'px'
    // }
    


    // Domácí úkol 3: Dopracuj ovládání audio souboru
    // nastavení zvuku na 0, 0.5 a 1
    // vrácení se na začátek

    // Funkce, která přehraje předaný prvek.Funkce
    // @param {string} elementSelector

    function prehraj(elementSelector) {
        let audioElement = document.querySelector(elementSelector);
        audioElement.play();
    }

    function zastav(elementSelector) {
        let audioElement = document.querySelector(elementSelector);
        audioElement.pause();
    }

    function ztisit(elementSelector) {
        let audioElement = document.querySelector(elementSelector);
        audioElement.volume = 0;
    }

    function akorat(elementSelector) {
        let audioElement = document.querySelector(elementSelector);
        audioElement.volume = 0.5;
    }

    function nahlas(elementSelector) {
        let audioElement = document.querySelector(elementSelector);
        audioElement.volume = 1;
    }

    function zpet(elementSelector) {
        let audioElement = document.querySelector(elementSelector);
        audioElement.currentTime = 0;
    }
    
    
