var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    brand: "Vue Mastery",
    selectedVariant: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green-onWhite.jpeg",
        variantQuantity: 100,
        onSale: true,
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpeg",
        variantQuantity: 0,
        onSale: false,
      },
    ],
    sizes: [
      { sizeVariant: "S", sizeId: 1 },
      { sizeVariant: "M", sizeId: 2 },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    subtractFromCart() {
      this.cart -= 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    onSale() {
      return this.variants[this.selectedVariant].onSale;
    },
  },
});
