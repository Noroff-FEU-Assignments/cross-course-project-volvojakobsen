const detailContainer = document.querySelector(".details");

const querystring = document.location.search;

console.log(querystring);

const params = new URLSearchParams(querystring);

console.log(params)

const id = params.get("id");

const parseId = querystring.replace(/\D/g, "");

console.log(id);
console.log(parseId);

const url2 = "http://volvojakobsen.shop/wp-json/wc/store/products/" + parseId;
console.log(url2)

function displayError(message = "unknown error") {
    return `<div class="error">${message}</div>`;
}


async function fetchProduct() {
    try {
        const response = await fetch(url2);
        const details = await response.json();


        detailContainer.innerHTML = `<h1>${details.name}</h1> <img src = "${details.images[0].src}"class= item_img /> <p>${details.description}</p> <h3>price: ${details.prices.price}</h3> <button class="cta purchase">Buy</button></div>`
    }
    catch (error) {
        detailContainer.innerHTML = displayError("the API call failed");
    }
}

fetchProduct();