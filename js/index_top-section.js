const url3 = "https://volvojakobsen.shop/wp-json/wc/store/products?consumer_key=ck_cfe7d5899cff9ba316101163754fbaf4066da10c&consumer_secret=cs_603e95715d484c920cc42cd63209f66f0e08aa3c";

const result = document.querySelector(".top_section");

function displayError(message = "unknown error") {
    return `<div class="error">${message}</div>`;
}


async function apiCall() {
    try {
        const response = await fetch(url3);
        const json = await response.json();
        //console.log(json);

        result.innerHTML = "";



        for (let i = 0; i < json.length; i++) {

            if (json[i].categories.length === 0) {
                continue;
            };
            if (json[i].categories[0].name !== "New release") {
                continue;
            }
            //console.log(json[i].categories[0].name)



            result.innerHTML += `<div class= "home_block_1" ><h2>${json[i].categories[0].name}</h2> <a href="details.html?id${json[i].id}"> <img src = "${json[i].images[0].src}" class="new_release" /></a></div> 
            <div class="home_block2"><h2>${json[i].name}</h2><p>price: ${json[i].prices.price}</p><button class="cta purchase">Buy</button></div>`;
        }


    }
    catch (error) {
        result.innerHTML = displayError("the API call failed");
    }
}

apiCall()

//`< div class= game_block_1 ><h2>${json[i].categories.name}</h2> <a href="details.html?id${json[i].id}"> <img src = "${json[i].images[0].src}" class= item_img /></a>  <h3>price: ${json[i].prices.price}</h3> <button class="cta purchase">Buy</button></div > `;