const navCart = document.querySelectorAll("#nav-cart");
let carts = document.querySelectorAll(".purchase");

let products = [
    {
        name: "furious",
        tag: "furious playbox",
        price: 69,
        inCart: 0,
    },
    {
        name: "forge legend",
        tag: "forge legend playbox",
        price: 30,
        inCart: 0,
    },
    {
        name: "assassin",
        tag: "assassin playbox",
        price: 26,
        inCart: 0
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
};

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector(".nav-cart span").textContent = productNumbers;
    }
}

function cartNumbers(product) {
    console.log("clicked:", product);
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".nav-cart span").textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".nav-cart span").textContent = 1;
    }
    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);


    if (cartItems != null) {

        if (cartItems[product.tag] === undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }

    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));


}

function totalCost(product) {
    console.log("product price is:", product.price);
    let cartCost = localStorage.getItem("totalCost");
    console.log("cartcost is:", cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-container");
    let cartCost = localStorage.getItem("totalCost")
    if (cartItems && productContainer) {
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="products">
            <span>${item.name}</span>
            </div>
            <div class="price">$${item.price},00</div>
            <div class="quantity"><span>${item.inCart}</span></div>
            <div class="total">$${item.inCart * item.price},00</div>
            `
        });
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">basket total</h4>
        <h4 class="basketTotal">$${cartCost}</h4>
        `
    }
}

onLoadCartNumbers();
displayCart()
