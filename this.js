const Mango = {
  color: "green",
  price: 120,
  weight: "500gm",
  about: function()
  {
    return `This mango price is ${this.price} Taka. Color is ${this.color}. Weight is ${this.weight}.`;
  }
}

console.log(Mango.about());
