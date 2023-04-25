//adds an event listener to execute onLoad method when page finished loading
document.addEventListener("DOMContentLoaded", load);

/*
    create Product function
    This function will retrieve the data for the products
 */
function createProduct(productData) {
    let products = document.getElementById("products");
    
    for(let i=0;i<productData.length;i++)
    {
        let div = document.createElement("div");
        div.setAttribute('class', 'box');
        let imgdiv = document.createElement("div");
        imgdiv.setAttribute('class', 'images');
        let img = document.createElement("img");
        img.setAttribute('src', `images/${productData[i].image}`);
        imgdiv.appendChild(img);

        let detaildiv = document.createElement("div");
        detaildiv.setAttribute('class', 'details');

        let branddiv = document.createElement("div");
        branddiv.innerHTML = productData[i].brand_name;
        let btag = document.createElement("b");
        btag.innerHTML = productData[i].product_name;
        let ptag = document.createElement("p");
        ptag.innerHTML = productData[i].product_packing;
        let pricediv = document.createElement("div");
        pricediv.innerHTML = productData[i].product_price;

        detaildiv.appendChild(branddiv);
        detaildiv.appendChild(btag);
        detaildiv.appendChild(ptag);
        detaildiv.appendChild(pricediv);

        div.appendChild(imgdiv);
        div.appendChild(detaildiv);

        products.appendChild(div);
    }

}

/*
    load function
        loading the json file - run when the page loads
 */
function load() {
    fetch('product.json')
        .then(result => {
            return result.json()
        })
        .then(data => {
            createProduct(data);
        });
}