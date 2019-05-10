import Vue from "vue";
import Vuex from "vuex";

import wishlists from "./modules/wishlists";

// Registering Vuex to Vue
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    wishlists
  },
  state: {
    products: [
      { id: 1, name: "Product 1", price: 499 },
      { id: 2, name: "Product 2", price: 399 },
      { id: 3, name: "Product 3", price: 349 }
    ],
    cart: []
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
    },
    getCartTotal(state) {
      return state.cart.reduce((total, product) => {
        return (total += product.price * product.quantity);
      }, 0);
    },
    getCartProductCount(state) {
      return state.cart.length;
    }
  },
  mutations: {
    ADD_TO_CART(state, product) {
      product.quantity = 1;
      state.cart.push(product);
    },
    REMOVE_FROM_CART(state, product) {
      state.cart.pop(product);
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit("ADD_TO_CART", payload);
    },
    removeFromCart({ commit }, payload) {
      commit("REMOVE_FROM_CART", payload);
    }
  }
});
