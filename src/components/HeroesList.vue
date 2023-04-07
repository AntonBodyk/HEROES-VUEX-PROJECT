<template>
    <ul class="heroes-list">
        <transition-group name="heroes-list">
        <HeroesListItem 
                :heroe="heroe"
                v-for="heroe in allHeroes"
                :key="heroe.id"
                />
        </transition-group>
        <h5 v-if="allHeroes.length === 0" className="text-center mt-5">Героев пока нет</h5>
    </ul>
    
</template>
 
<script>
import {mapGetters} from 'vuex';
import HeroesListItem from './HeroesListItem.vue';
    export default {
        components: {
            HeroesListItem
        },
        computed: mapGetters(['allHeroes']),
        // computed: {
        //     allHeroes() {
        //         return this.$store.getters.allHeroes
        //     }
        // },
        data() {
            return{
                show: false
            }
        }
    }
        
    
</script>
 
<style scoped>
    .heroes-list-enter-active,
    .heroes-list-leave-active {
        transition: all 0.4s ease;
    }
    .heroes-list-enter-from,
    .heroes-list-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }
    .heroes-list-move {
        transition: transform 0.8s ease;
    }

</style>