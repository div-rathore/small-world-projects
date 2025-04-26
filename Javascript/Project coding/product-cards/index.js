let data = [];
let container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const jsonData = await response.json();
  data = jsonData;
  renderProducts(data);
};
const renderProducts = (data) => {
  data.map((item) => {
    container.innerHTML += `
     <div class="card">
        <img
          src="${item.image}"
          alt="${item.title}"
          class="img"
          id="img"
        />
        <div class="details">
          <span class="product__name">${item.title}</span>
          <span class="product__category">${item.category}</span>
          <div class="all__star">
          
         ${(() => {
           let stars = "";
           for (let i = 0; i < Math.ceil(item.rating.rate); i++) {
             stars += '<span class="star__filled">&#9733;</span>';
           }
           for (let i = Math.ceil(item.rating.rate); i < 5; i++) {
             stars += '<span class="star__notfilled">&#9734;</span>';
           }
           return stars;
         })()}
           
          </div>
          <div class="rating__count">Rating Count: ${item.rating.count}</div>
        </div>
        <div class="btn">
          <button class="btn__buy">Buy Now</button>
        </div>
      </div>`;
  });
};
