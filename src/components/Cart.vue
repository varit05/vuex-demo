<template>
  <div>
    <h3 class="text-center">Shopping Cart</h3>
    <hr>
    <div class="mt-3" v-for="product in cart" :key="product.id">
      {{product.name}} - {{product.price}}
      <button
        class="btn btn-outline-danger"
        @click="removeFromCart(product)"
      >Remove</button>
    </div>
    <hr>
    <h4>Total: {{total}}</h4>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapGetters({ cart: "getCart", total: "getCartTotal" })
  },
  methods: {
    ...mapActions(["removeFromCart"])
  }
};
</script>
