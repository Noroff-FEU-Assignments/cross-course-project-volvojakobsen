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

    console.log(cartItems)
}

onLoadCartNumbers();

