document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.a');
    const hb = document.querySelectorAll(".btv");
    elements.forEach(function(element) {
        if (element.classList.contains("a")) {
            element.classList.remove('hidden');
            element.classList.add('visible');
        }
    });
    hb.forEach(function(b){
        b.classList.remove("h");
    })
    hb[0].classList.add("h");
    var scrol = document.querySelectorAll(".x");
    scrol.forEach(function(button) {
        button.addEventListener("click", function() {
            window.scrollTo({
                top: 0, 
                behavior: "smooth" 
            });
        });
    }); 

    const btn = document.querySelector(".btn");
    const acc = document.querySelector(".acc");
    const ap = document.querySelector(".ap");
    const ct = document.querySelector(".ct");

    btn.addEventListener("click", function() {
        hb[1].classList.add("h");
        hb[0].classList.remove("h");
        hb[2].classList.remove("h");
        hideElement(".a");
        hideElement(".cont");
        hideElement(".soc");
        showElement(".appli");
        showElement(".s");
        showElement(".contai");
        showElement(".app");
    });

    ap.addEventListener("click", function() {
        hb[1].classList.add("h");
        hb[0].classList.remove("h");
        hb[2].classList.remove("h");
        hideElement(".a");
        hideElement(".cont");
        hideElement(".soc");
        showElement(".appli");
        showElement(".s");
        showElement(".contai");
        showElement(".app");
    });

    acc.addEventListener("click", function() {
        hb[0].classList.add("h");
        hb[1].classList.remove("h");
        hb[2].classList.remove("h");
        showElement(".a");
        hideElement(".appli");
        hideElement(".s");
        hideElement(".contai");
        hideElement(".app");
        hideElement(".cont");
        hideElement(".soc");
    });

    ct.addEventListener("click", function() {
        hb[2].classList.add("h");
        hb[1].classList.remove("h");
        hb[0].classList.remove("h");
        showElement(".cont");
        showElement(".soc");
        hideElement(".a");
        hideElement(".appli");
        hideElement(".s");
        hideElement(".contai");
        hideElement(".app");
    });
});

function hideElement(elementClass) {
    var elements = document.querySelectorAll(elementClass);
    elements.forEach(function(element) {
        element.classList.remove('visible');
        element.classList.add('hidden');
    });
}

function showElement(elementClass) {
    var elements = document.querySelectorAll(elementClass);
    elements.forEach(function(element) {
        element.classList.remove('hidden');
        element.classList.add('visible');
    });
}
