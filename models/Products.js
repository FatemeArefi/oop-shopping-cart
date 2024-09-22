import Display from "./Display.js";

class Products extends Display {
  constructor(parent, products, cart) {
    super(parent, products);
    this.cart = cart;
  }

  showProducts() {
    this.products.forEach((product) => this.createCard(product));
  }
  // createCard(data) {
  //   const cardEle = document.createElement("div");

  //   const imgEle = this.productImg(data);
  //   const infoEle = this.productInfo(data);

  //   cardEle.innerHTML = imgEle;
  //   cardEle.innerHTML += infoEle;

  //   this.parent.appendChild(cardEle);
  // }

  // const img = document.createElement("img");
  // img.src = image;
  // img.alt = alt;

  productInfo(data) {
    const { id, price, name } = data;

    const infoJSX = `
<div id="product-info">
<h3>${name}</h3>
<div>
<span>$ ${price}</price>
<button data-id=${id}>+</button>
</div>
</div>
`;
    return infoJSX;
  }
  handleEvent() {
    const element = event.target;

    if (element.tagName === "BUTTON") {
      this.addToCart(element.dataset.id);
    }
  }
  addToCart(id) {
    const product = this.products.find((i) => i.id === +id);
    this.cart.products.push(product);
    this.cart.showProducts();
  }
}
export default Products;
