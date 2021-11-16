var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite.jpeg",
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      { variantId: 2234, variantColor: "green" },
      { variantId: 2235, variantColor: "blue" },
    ],
    sizes: [
      { sizeVariant: "S", sizeId: 1 },
      { sizeVariant: "M", sizeId: 2 },
    ],
  },
});
