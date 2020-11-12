const shop = [
  {
    name: "Cheese Burger",
    price: 150,
    quantity: 0,
    img: "./images/cheeseburger.png" 
  },
  {
    name: "Veg Pizza",
    price: 200,
    quantity: 0,
    img: "./images/vegpizza.jpg"
  },
  {
    name: "Taco",
    price: 160,
    quantity: 0,
    img: "./images/taco.jpeg"
  },
  {
    name: "Sandwich",
    price: 120,
    quantity: 0,
    img: "./images/Sandwich.jpg"
  },
  {
    name: "Fries",
    price: 80,
    quantity: 0,
    img: "./images/fries.jpg"
  },
  {
    name: "Chocolate Smoothie",
    price: 120,
    quantity: 0,
    img: "./images/smoothie.jpg"
  },
  {
    name: "Coke",
    price: 50,
    quantity: 0,
    img: "./images/coke.jpg"
  },
  {
    name: "Sprite",
    price: 50,
    quantity: 0,
    img: "./images/sprite.png"
  },
  {
    name: "BlackForest Pastry",
    price: 60,
    quantity: 0,
    img: "./images/blackpastry.jpg"
  },
  {
    name: "Pineapple Pastry",
    price: 50,
    quantity: 0,
    img: "./images/pastrypine.jpg"
  },
  {
    name: "Ice Tea",
    price: 40,
    quantity: 0,
    img: "./images/tea.jpg"
  },
  {
    name: "Noodles",
    price: 130,
    quantity: 0,
    img: "./images/Noodle.jpg"
  },
  {
    name: "Veg Wrap",
    price: 90,
    quantity: 0,
    img: "./images/vegwrap.png"
  },
  {
    name: "Paneer Wrap",
    price: 100,
    quantity: 0,
    img: "./images/Wrap.jpg"
  },
  {
    name: "Samosa",
    price: 30,
    quantity: 0,
    img: "./images/Samosa.jpg"
  },
  {
    name: "Pav Bhaji",
    price: 75,
    quantity: 0,
    img: "./images/pavbhaji.jpg"
  },
  {
    name: "Lime Soda",
    price: 50,
    quantity: 0,
    img: "./images/Soda.jpg"
  },
  {
    name: "Cheese Popcorn",
    price: 150,
    quantity: 0,
    img: "./images/Pop.jpg"
  },
  {
    name: "Nachos",
    price: 80,
    quantity: 0,
    img: "./images/nacho.jpeg"
  },
  {
    name: "Paratha",
    price: 120,
    quantity: 0,
    img: "./images/paratha.jpeg"
  },
  {
    name: "Veg Biryani",
    price: 200,
    quantity: 0,
    img: "./images/biryani.jpeg"
  },
  {
    name: "Pasta",
    price: 130,
    quantity: 0,
    img: "./images/pasta.jpeg"
  },
  {
    name: "Waffle",
    price: 120,
    quantity: 0,
    img: "./images/Waffle.jpeg"
  }
];

const vm = new Vue({
  el: "#app",
  data: {
    items: [],
    shop: shop,
    showCart: false,
    verified: false,
    quantity: 1
  },
  computed: {
    total() {
      var total = 0;
      for(var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    }
  },
  methods: {
    addToCart(item) {
      item.quantity += 1;
      this.items.push(item);
    },
    removeFromCart(item) {
      item.quantity -= 1;
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
});