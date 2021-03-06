const state = {
  wishlists: []
};

const getters = {
  getWishlistCount(state) {
    return state.wishlists.length;
  }
};

const mutations = {
  ADD_TO_WISHLIST(state, product) {
    state.wishlists.push(product);
  },
  REMOVE_FROM_WISHLIST(state, product) {
    state.wishlists.pop(product);
  }
};

const actions = {
  addToWishlist({ commit }, payload) {
    commit("ADD_TO_WISHLIST", payload);
  },
  removeFromWishlist({ commit }, payload) {
    commit("REMOVE_FROM_WISHLIST", payload);
  }
};

const wishlists = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};

export default wishlists;
