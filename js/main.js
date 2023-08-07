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