<template>
  <transition name="fade">
    <div class="text-center" v-if="wishlistCount">
      <h3>Wishlists</h3>
      <hr>
      <div class="mt-3" v-for="wishlist in wishlists" :key="wishlist.id">
        {{wishlist.name}} - Rs. {{wishlist.price}}
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
  </transition>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "Wishlists",
  computed: {
    ...mapState({
      wishlists: state => state.wishlists.wishlists
    }),
    ...mapGetters({
      wishlistCount: "wishlists/getWishlistCount"
    })
  },
  methods: {
    ...mapActions(["addToCart"]),
    ...mapActions("wishlists", ["removeFromWishlist"])
  }
};
</script>

<style>
</style>
