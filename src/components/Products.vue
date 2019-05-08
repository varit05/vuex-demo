<template>
  <div class="text-center">
    <h3>Products</h3>
    <hr>
    <div class="mt-3" v-for="product in products" :key="product.id">
      {{product.name}} - {{product.price}}
      <button
        class="btn btn-outline-success"
        @click="addToCart(product)"
      >Add to cart</button>
      <button class="ml-2 btn btn-outline-primary" @click="addToWishlist(product)">Add to Wishlist</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Products",
  computed: {
    ...mapGetters({ products: "allProducts" })
    // products() {
    //   return this.$store.state.products;
    // }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
    addToWishlist(product) {
      this.$store.dispatch("wishlists/addToWishlist", product);
    }
    // ...mapActions("wishlists", ["addToWishlist"])
  }
};
</script>
