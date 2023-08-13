//Con esto busco todos los menu-item
const menuItems = document.querySelectorAll('.nav-item')

menuItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const activeItem = document.querySelector('.active');
        activeItem.classList.remove('active');
        e.target.classList.add('active');
    });
});

//Botón modo oscuro
const cambioModo = document.querySelector('#modOscuro');

cambioModo.addEventListener('click', function () {
    document.body.classList.toggle('modo-oscuro');
})


//Buscar todos los elementos img dentro del contenedor .carousel-inner
const imgElementos = document.querySelectorAll('.carousel-inner img');

// eventListener para cada uno de los elementos
imgElementos.forEach(img => {
    img.addEventListener('click', function() {
        nuevaTab(img.src);
    });
})

// Funcion para abrir los elementos en una nueva ventana
function nuevaTab(imageUrl) {
    window.open(imageUrl, '_blank');
}

// Funcion para cambiar el texto en PC
textoParaPC();
window.addEventListener('resize', textoParaPC);

function textoParaPC() {
    const textElement = document.getElementById('txt-dinamico');
    if (window.innerWidth >= 1024) {
        textElement.textContent = "Haz click en la imagen si quieres verla en grande";
    } else {
        // Reset text for larger screens
        textElement.textContent = "Toca la imagen si quieres verla en grande";
    }
}

//Para cerrar el menú automáticamente
document.addEventListener("DOMContentLoaded", function () {
    // Close the menu when a link is clicked
    var navLinks = document.querySelectorAll(".navbar-nav a");
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function () {
            var navbarCollapse = document.getElementById("navbarSupportedContent");
            var bootstrapNavbar = bootstrap.Collapse.getInstance(navbarCollapse);
            bootstrapNavbar.hide(); // Close the collapse
        });
    }
});
