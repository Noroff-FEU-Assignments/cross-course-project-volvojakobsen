const url4 = "https://volvojakobsen.shop/wp-json/wc/store/products?consumer_key=ck_cfe7d5899cff9ba316101163754fbaf4066da10c&consumer_secret=cs_603e95715d484c920cc42cd63209f66f0e08aa3c";

const sales = document.querySelector(".home_games");

function displayError(message = "unknown error") {
    return `<div class="error">${message}</div>`;
}


async function apiCall() {
    try {
        const response = await fetch(url3);
        const json = await response.json();
        console.log(json);

        sales.innerHTML = "";



        for (let i = 0; i < json.length; i++) {

            if (json[i].categories.length === 0) {
                continue;
            };
            if (json[i].categories[0].name !== "sale") {
                continue;
            }
            console.log(json[i].categories[0].name)



            sales.innerHTML += `<section class="forge">
            <div class="forge_block">
              <h2>${json[i].name}</h2>
              <a href="details.html?id${json[i].id}"> <img src = "${json[i].images[0].src}" class= item_img /></a>
            </div>
            <div class="forge_block2">
              <h2>${json[i].categories[0].name}</h2>
              <h3>only ${json[i].prices.price}$</h3>
              <button class="cta purchase">Buy</button>
            </div>
          </section>`;
        }


    }
    catch (error) {
        result.innerHTML = displayError("the API call failed");
    }
}

apiCall()

//`< div class= game_block_1 ><h2>${json[i].categories.name}</h2> <a href="details.html?id${json[i].id}"> <img src = "${json[i].images[0].src}" class= item_img /></a>  <h3>price: ${json[i].prices.price}</h3> <button class="cta purchase">Buy</button></div > `;