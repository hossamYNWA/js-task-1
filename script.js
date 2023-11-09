var cards = document.querySelectorAll('.card')
var checkout = document.querySelector('.checkout')
var checkoutDiv = document.getElementById("items")
var btn = document.querySelector(".checkout>button")
var totalPrice = 0

cards.forEach(card => {
    card.onclick = function() {
        checkoutDiv.innerHTML += '<div class="item">' + card.getAttribute("name") + "<span>" + card.getAttribute("price") + "</span>" + "</div>";
        totalPrice += +(card.getAttribute("price"))
        if (checkoutDiv.innerHTML != "") {
            checkout.style.display = " block"
        }
    }
})

btn.onclick = function() {
    checkoutDiv.innerHTML += '<div class="fw-bold fs-3">' + "Total: " + totalPrice + "</div>"
    btn.style.display = "none"
}
