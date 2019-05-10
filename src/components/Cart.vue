<template>
  <div v-if="cartCount">
    <h3 class="text-center">Shopping Cart</h3>
    <hr>
    <div class="mt-3" v-for="product in cart" :key="product.id">
      {{product.name}} - {{product.price}}
      <button
        class="btn btn-outline-danger"
        @click="removeFromCart(product)"
      >Remove</button>
      <button class="ml-2 btn btn-outline-primary" @click="addToWishlist(product)">Add to Wishlist</button>
    </div>
    <div>
      <hr>
      <h4>Total: {{total}}</h4>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapGetters({
      cart: "getCart",
      total: "getCartTotal",
      cartCount: "getCartProductCount"
    })
  },
  methods: {
    // Map multiple actions to different modules
    ...mapActions(["removeFromCart"]),
    ...mapActions("wishlists", ["addToWishlist"])
  }
};
</script>
