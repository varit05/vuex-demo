<template>
  <transition name="fade">
    <div v-if="cartCount">
      <h3 class="text-center">Shopping Cart</h3>
      <hr>
      <div class="mt-3" v-for="product in cart" :key="product.id">
        {{product.name}} - Rs. {{product.price}}
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
  </transition>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState({
      cart: state => state.cart
    }),
    // Access getters directly
    // total() {
    //   return this.$store.getters.getCartTotal;
    // },
    // If you want to map a getter to a different name, use an object
    ...mapGetters({
      total: "getCartTotal",
      cartCount: "getCartProductCount"
    }),
    // Pass a String array when the name is similar to state tree
    ...mapGetters(["getCartTotal", "getCartProductCount"])
  },
  methods: {
    // Map multiple actions to different modules
    ...mapActions(["removeFromCart"]),
    ...mapActions("wishlists", ["addToWishlist"])
  }
};
</script>
