import { createStore } from 'vuex'
import data from '../json/heroes.json'
export default createStore({
  state: {
    heroes: [],
    filter: ''
  },
  getters: {
    allHeroes(state) {
      return state.heroes.filter(item => item.element.includes(state.filter));
    }
  },
  mutations: {
    updateHeroes(state, heroes) {
      state.heroes = heroes;
    },
    updateFilter(state, filter) {
      state.filter = filter;
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
