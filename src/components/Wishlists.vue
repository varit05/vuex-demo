<template>
  <div class="text-center" v-if="wishlistCount">
    <h3>Wishlists</h3>
    <hr>
    <div class="mt-3" v-for="wishlist in wishlists" :key="wishlist.id">
      {{wishlist.name}} - {{wishlist.price}}
      <button
        class="btn btn-outline-success"
        @click="addToCart(wishlist)"
      >Add to cart</button>
      <button
        class="ml-2 btn btn-outline-primary"
        @click="removeFromWishlist(wishlist)"
      >Remove From Wishlist</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Wishlists",
  computed: {
    ...mapGetters({
      wishlists: "wishlists/getWishList",
      wishlistCount: "wishlists/getWishlistCount"
    })
    // products() {
    //   return this.$store.state.products;
    // }
  },
  methods: mapActions(["addToCart"])
};
</script>

<style>
</style>
