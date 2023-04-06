<template>
  <main className="app">
            <div className="content">
              <HeroesList/>
                <div className="content__interactive">
                    <HeroesAddForm/>
                    <HeroesFilters/>
                </div>
            </div>
        </main>
</template>

<script>
import HeroesAddForm from './components/HeroesAddForm.vue';
import HeroesList from './components/HeroesList.vue';

export default {
  components: {
     HeroesAddForm, HeroesList
  },
  async mounted() {
    this.$store.dispatch('requestHeroes');
    }
}
</script>

<style lang="scss">
  .app {
    height: 100vh;
    overflow-y: scroll;
    background: url('./assets/hero_bg.jpg') center / cover no-repeat;
}

.content {
    display: grid;
    grid-template-columns: 560px 440px;
    max-width: 1040px;
    margin: 0 auto;
    padding-top: 50px;
    &__interactive {
        padding-left: 40px;
    }
}
</style>
