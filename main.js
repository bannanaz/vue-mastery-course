Vue.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `,
});

Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
    <div class="product">
            <div class="product-image">
                 <img v-bind:src="image">
            </div>

            <div class="product-info">
                <h1>{{title}}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else
                class="out-of-stock"
                >Out of Stock</p>
                <p>Shipping: {{shipping}}</p>

                <product-details :details="details"></product-details>
                
                <p>{{sale}}</p>

                <div v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    class="color-box"
                    :style="{backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index)">              
                </div>

                   
                <div v-for="size in sizes" :key="size.sizeId">
                    <p>{{size.sizeVariant}}</p>
                </div>
                
                    <button 
                    v-on:click="addToCart" 
                    :disabled="!inStock"
                    :class="{disabledButton: !inStock}"
                    >Add to Cart
                    </button>

                    <button 
                    v-on:click="removeFromCart"
                    :disabled="!inStock"
                    :class="{disabledButton: !inStock}"
                    >
                    Remove from Cart
                </button>
            </div>
        </div>
`,
  data() {
    return {
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
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./assets/vmSocks-blue-onWhite.jpeg",
          variantQuantity: 0,
        },
      ],
      sizes: [
        { sizeVariant: "S", sizeId: 1 },
        { sizeVariant: "M", sizeId: 2 },
      ],
      onSale: true,
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
    },
    removeFromCart() {
      this.$emit(
        "remove-from-cart",
        this.variants[this.selectedVariant].variantId
      );
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
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
    sale() {
      if (this.onSale) {
        return this.brand + " " + this.product + " are on sale!";
      }
      return this.brand + " " + this.product + " are not on sale";
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeItem(id) {
      for (var i = this.cart.length - 1; i >= 0; i--) {
        if (this.cart[i] === id) {
          this.cart.splice(i, 1);
        }
      }
    },
  },
});
