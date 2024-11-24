precio = 400000
precioInicial = document.querySelector(".precio-inicial")
precioInicial.innerHTML = precio

const cantidad = document.querySelector('.cantidad')
const total = document.querySelector('.valor-total')
const mas = document.querySelector('.mas')
const menos = document.querySelector('.menos')

mas.addEventListener('click', () => {
    cantidad.innerHTML++
    total.innerHTML = (cantidad.innerHTML * precioInicial.innerHTML)
})

menos.addEventListener('click', () => {
    cantidad.innerHTML--
    total.innerHTML = (cantidad.innerHTML * precioInicial.innerHTML)
})