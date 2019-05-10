<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <Products class="col-12 col-md-6"/>
      <Cart class="col-12 col-md-6"/>
    </div>
    <div class="row mt-5">
      <Wishlists class="col-12 col-md-6"/>
    </div>
  </div>
</template>

<script>
import Products from "@/components/Products.vue";
import Cart from "@/components/Cart.vue";
import Wishlists from "@/components/Wishlists.vue";

export default {
  name: "app",
  components: {
    Products,
    Cart,
    Wishlists
  }
};
</script>
