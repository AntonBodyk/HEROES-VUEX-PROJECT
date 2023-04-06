import { createStore } from 'vuex'
import data from '../json/heroes.json'
export default createStore({
  state: {
    heroes: []
  },
  getters: {
    allHeroes(state) {
      return state.heroes
    }
  },
  mutations: {
    updateHeroes(state, heroes) {
      state.heroes = heroes;
    },
    createHeroe(state, newHeroe) {
      state.heroes.push(newHeroe);
    },
    removeHeroes(state, heroe) {
      state.heroes = state.heroes.filter(item => item.id !== heroe.id);
    }
  },
  actions: {
    requestHeroes(ctx) {
      const heroes = data.heroes;

      ctx.commit('updateHeroes', heroes)
    }
  },
  modules: {
  }
})
