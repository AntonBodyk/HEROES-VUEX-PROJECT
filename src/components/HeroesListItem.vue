<template>
     <li 
            class='card flex-row mb-4 shadow-lg text-white'
            :class="{
                'bg-danger bg-gradient': heroe.element === 'fire',
                'bg-primary bg-gradient': heroe.element === 'water',
                'bg-success bg-gradient': heroe.element === 'wind',
                'bg-secondary bg-gradient': heroe.element === 'earth'
            }">
            <img src="../assets/завантаження.jpg" 
                 className="heroe-img img-fluid w-25 d-inline" 
                 alt="unknown hero" 
                 />
            <div className="card-body">
                <h3 className="card-title">{{ heroe.name }}</h3>
                <p className="card-text">{{ heroe.description }}</p>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button @click="removeHeroes(heroe)" type="button" className="btn-close btn-close" aria-label="Close"></button>
            </span>
        </li>
</template>
 
<script>
import { mapMutations } from 'vuex';
    export default {
        props: {
            heroe: {
                type: Object,
                required: true
            }
        },
        methods: mapMutations(['removeHeroes'])
    }
</script>
 
<style scoped>
.heroe-img {
    height: 150px;
}
  .card-title {
    font-size: 15px;
    color: black;
  }
  .card-text {
    font-size: 15px;
    color: black;
  }
</style>