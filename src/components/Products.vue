<template>
  <transition name="fade">
    <div class="text-center">
      <h3>Products</h3>
      <hr>
      <div class="mt-3" v-for="product in products" :key="product.id">
        {{product.name}} - Rs. {{product.price}}
        <button
          class="btn btn-outline-success"
          @click="addToCart(product)"
        >Add to cart</button>
        <button class="ml-2 btn btn-outline-primary" @click="addToWishlist(product)">Add to Wishlist</button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Products",
  computed: {
    // Without mapState helper
    // products() {
    //   return this.$store.state.products;
    // }

    // With mapState Helper
    // ...mapState({
    //   // Arrow function makes code more readable
    //   products: state => state.products
    // }),

    // Pass a String array when the name is similar to state tree
    ...mapState(["products"])
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
