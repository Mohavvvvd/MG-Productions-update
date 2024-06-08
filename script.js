document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.a');
    elements.forEach(function(element) {
        if (element.classList.contains("a")) {
            element.classList.remove('hidden');
            element.classList.add('visible');
        }
    });
    var scrol = document.querySelectorAll(".btv");
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
        hideElement(".a");
        hideElement(".cont");
        hideElement(".soc");
        showElement(".appli");
        showElement(".s");
        showElement(".contai");
        showElement(".app");
    });

    ap.addEventListener("click", function() {
        hideElement(".a");
        hideElement(".cont");
        hideElement(".soc");
        showElement(".appli");
        showElement(".s");
        showElement(".contai");
        showElement(".app");
    });

    acc.addEventListener("click", function() {
        showElement(".a");
        hideElement(".appli");
        hideElement(".s");
        hideElement(".contai");
        hideElement(".app");
        hideElement(".cont");
        hideElement(".soc");
    });

    ct.addEventListener("click", function() {
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
