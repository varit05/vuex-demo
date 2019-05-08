const state = {
  wishlists: []
};

const getters = {
  getWishList(state) {
    return state.wishlists;
  }
};

const mutations = {
  ADD_TO_WISHLIST(state, product) {
    state.wishlists.push(product);
  }
};

const actions = {
  addToWishlist({ commit }, payload) {
    commit("ADD_TO_WISHLIST", payload);
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
