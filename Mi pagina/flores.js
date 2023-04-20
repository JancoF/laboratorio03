
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});


    function ajustarColumnas() {
        var columnas = document.getElementsByClassName("columna");
        var numColumnas = columnas.length;
        var columnasPorFila = 1;

        if (window.matchMedia("(min-width: 768px)").matches) {
            columnasPorFila = 2;
        }

        if (window.matchMedia("(min-width: 992px)").matches) {
            columnasPorFila = 3;
        }

        var filaActual = 1;
        for (var i = 0; i < numColumnas; i++) {
            if (i % columnasPorFila == 0) {
                filaActual++;
            }
            columnas[i].classList.add("fila-" + filaActual);
        }
    }

    window.onload = ajustarColumnas;
    window.onresize = ajustarColumnas;



